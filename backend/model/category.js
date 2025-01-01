import mongoose from 'mongoose';

// Category schema (for reference)
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;