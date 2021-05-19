const mongoose = require("mongoose");

const BetSchema = new mongoose.Schema(
  {
    retailerId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    adminCommissions: {
      type: Number,
      default: 0,
    },
    game: {
      type: String,
      enum: ["rouletteMini", "tripleChance"], //if you write admin than its display error "`admin` is not a valid enum value for path`role`".
      required: true,
    },
    bet: Number,
    winPosition: {
      type: String,
      default: "",
    },
    startPoint: Number,
    userName: String,
    name: String,
    position: {
      type: Object,
      required: true,
    },
    won: {
      type: Number,
      default: 0,
    },
    retailerCommission: {
      type: Number,
      default: 0,
    },

    superDistributerCommission: {
      type: Number,
      default: 0,
    },

    DrTime: {
      type: String,
      default: () =>
        new Date()
          .toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
          })
          .toString()
          .split(",")[1],
    },
    DrDate: {
      type: String,
      default: () =>
        new Date()
          .toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
          })
          .toString()
          .split(",")[0]
          .replace(/\//g, (x) => "-"),
    },
    createDate: {
      type: String,
      default: () =>
        new Date()
          .toLocaleString("en-US", {
            timeZone: "Asia/Calcutta",
          })
          .toString(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bet", BetSchema);
