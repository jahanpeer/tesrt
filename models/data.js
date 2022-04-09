const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: String,
      required: true,
    },
    shortUrl : {
      type : String,
    },
    isEncrypted: {
      type: Boolean,
      default: false,
    },
    accessLogs: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Data", dataSchema);
