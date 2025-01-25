"use client";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,
  useCdn: false, 
});

interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSectionProps {
  currentProductId: number;
}

export default function ReviewSection({ currentProductId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState({
    user: "",
    rating: 0,
    comment: "",
  });
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [editedReview, setEditedReview] = useState({
    user: "",
    rating: 0,
    comment: "",
  });

  // Fetch reviews for the specific product
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const query = `*[_type == "review" && productId == $productId] | order(date desc)`;
        const data = await sanityClient.fetch(query, { productId: currentProductId });
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        toast.error("Unable to load reviews. Please try again later.");
      }
    };

    fetchReviews();
  }, [currentProductId]);

  const handleRatingChange = (rating: number) => {
    setUserReview((prev) => ({ ...prev, rating }));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserReview((prev) => ({ ...prev, comment: e.target.value }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserReview((prev) => ({ ...prev, user: e.target.value }));
  };

  const handleSubmitReview = async () => {
    if (userReview.rating === 0 || userReview.comment.trim() === "" || userReview.user.trim() === "") {
      toast.error("Please provide your name, a rating, and a comment before submitting.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const newReview = {
      _type: "review",
      user: userReview.user,
      rating: userReview.rating,
      comment: userReview.comment,
      date: new Date().toISOString(),
      productId: currentProductId, // Add the product ID here
    };

    try {
      const createdReview = await sanityClient.create(newReview);
      setReviews((prev) => [createdReview, ...prev]);
      setUserReview({ user: "", rating: 0, comment: "" });

      toast.success("Thank you for your review!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Failed to submit review:", error);
      toast.error("Unable to submit your review. Please try again.");
    }
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await sanityClient.delete(id);
      setReviews((prev) => prev.filter((review) => review._id !== id));
      toast.error("Review deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Failed to delete review:", error);
      toast.error("Unable to delete review. Please try again.");
    }
  };

  const handleEditClick = (review: Review) => {
    setEditingReviewId(review._id);
    setEditedReview({
      user: review.user,
      rating: review.rating,
      comment: review.comment,
    });
  };

  const handleEditRatingChange = (rating: number) => {
    setEditedReview((prev) => ({ ...prev, rating }));
  };

  const handleEditCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedReview((prev) => ({ ...prev, comment: e.target.value }));
  };

  const handleSaveEdit = async () => {
    if (editingReviewId) {
      try {
        await sanityClient.patch(editingReviewId).set(editedReview).commit();
        const updatedReviews = reviews.map((review) =>
          review._id === editingReviewId ? { ...review, ...editedReview } : review
        );
        setReviews(updatedReviews);
        setEditingReviewId(null);

        toast.success("Review updated successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
      } catch (error) {
        console.error("Failed to update review:", error);
        toast.error("Unable to update review. Please try again.");
      }
    }
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* Review Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
            placeholder="Enter your name"
            value={userReview.user}
            onChange={handleNameChange}
          />
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`h-6 w-6 cursor-pointer ${
                star <= userReview.rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
          rows={4}
          placeholder="Write your review here..."
          value={userReview.comment}
          onChange={handleCommentChange}
        />
        <button
          onClick={handleSubmitReview}
          className="bg-[#029FAE] hover:bg-[#02abaee6] text-white px-6 py-2 rounded-lg transition duration-300"
        >
          Submit Review
        </button>
      </div>

      {/* Display Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`h-5 w-5 ${
                      star <= review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{new Date(review.date).toLocaleString()}</span>
            </div>
            <h4 className="font-semibold text-gray-800">{review.user}</h4>
            {editingReviewId === review._id ? (
              <div className="mt-4">
                <div className="flex items-center mb-4">
                  <span className="mr-2">Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${
                        star <= editedReview.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => handleEditRatingChange(star)}
                    />
                  ))}
                </div>
                <textarea
                  className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                  rows={4}
                  placeholder="Edit your review..."
                  value={editedReview.comment}
                  onChange={handleEditCommentChange}
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-[#029FAE] hover:bg-[#02abaee6] text-white px-6 py-2 rounded-lg transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-700 mt-2">{review.comment}</p>
                <div className="flex items-center space-x-2 mt-4">
                  <button
                    onClick={() => handleEditClick(review)}
                    className="text-[#029FAE] hover:text-[#02abaee6] transition duration-300"
                  >
                    <FaEdit className="inline mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(review._id)}
                    className="text-red-500 hover:text-red-600 transition duration-300"
                  >
                    <FaTrash className="inline mr-1" /> Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
