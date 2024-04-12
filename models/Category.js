const mongoose = require('mongoose');
const { Children } = require('react');

const categorySchema = new mongoose.Schema(
  {
    parent: {
      type: String,
      required: true,
    },
    // name: {
    //   type: Array,
    //   required: true,
    // },
    type: {
      type: String,
      required: false,
    },
    // description: {
    //   type: Object,
    //   required: false,
    // },
    slug: {
      type: String,
      required: false,
    },
    parentId: {
      type: String,
      required: false,
    },
    parentName: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      lowercase: true,
      enum: ['show', 'hide'],
      default: 'show',
    },
    children: {
      type: [String],
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = categorySchema;

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;




// original except chidren


// const mongoose = require('mongoose');
// const { Children } = require('react');

// const categorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: Array,
//       required: true,
//     },
//     description: {
//       type: Object,
//       required: false,
//     },
//     slug: {
//       type: String,
//       required: false,
//     },
//     parentId: {
//       type: String,
//       required: false,
//     },
//     parentName: {
//       type: String,
//       required: false,
//     },
//     id: {
//       type: String,
//       required: false,
//     },
//     icon: {
//       type: String,
//       required: false,
//     },
//     status: {
//       type: String,
//       lowercase: true,
//       enum: ['show', 'hide'],
//       default: 'show',
//     },
//     Children: {
//       type: String,
//       required: true,
//     }
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = categorySchema;

// const Category = mongoose.model('Category', categorySchema);
// module.exports = Category;
