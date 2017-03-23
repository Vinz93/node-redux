import mongoose from 'mongoose';
import validate from 'mongoose-validator';
import paginate from 'mongoose-paginate';
import uniqueValidator from 'mongoose-unique-validator';
import fieldRemover from 'mongoose-field-remover';

const Schema = mongoose.Schema;

/**
 * @swagger
 * definition:
 *   Post:
 *     properties:
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       image:
 *         type: string
 *       categories:
 *         type: array
 *         items:
 *           type: string
 *       author:
 *         type: string
 *     required:
 *       - title
 *       - content
 *       - author
 */

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  categories: [
    { type: String },
  ],
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

postSchema.plugin(paginate);

export default mongoose.model('Post', postSchema);
