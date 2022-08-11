const userSchema = new mongoose.Schema(
  {
    size: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    isSubscribe: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
