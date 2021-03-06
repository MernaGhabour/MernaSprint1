var mongoose = require('mongoose');

var MernaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    component:{
      type: String,
      required : false,
      trim : true,
      lowercase: true
    },
    seller: {
        type: String,
        required : true,
        trim : true,
        lowercase: true
    }
});

mongoose.model('Merna', MernaSchema);
