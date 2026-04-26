const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },

  showId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Show",
    required: true,
    index: true,
  },

  seats: [
    {
      type: String,
      required: true,
      trim: true,
    }
  ],

  totalSeats: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["booked", "cancelled"],
    default: "booked",
    index: true,
  },

  bookingTime: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps: true,
}
);

// Validation
bookingSchema.pre("save", function () {
  if (!this.seats || this.seats.length === 0) {
    throw new Error("At least one seat must be selected");
  }

  if (this.totalSeats !== this.seats.length) {
    throw new Error("Seat count mismatch");
  }
});

// Compound Index
bookingSchema.index({ userId: 1, showId: 1 });

module.exports = mongoose.model("Booking", bookingSchema);