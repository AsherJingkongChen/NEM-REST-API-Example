import { Schema, model } from 'mongoose';

import { fileURLToPath } from 'url';
console.log(fileURLToPath(import.meta.url));

const data = {
  author: { type: String, default: 'Nobody', maxlength: 64 },
  title: { type: String, default: 'Nothing', maxLength: 256 },
  content: { type: String, required: true, maxLength: 64 * 256 },
};

const schema = new Schema(data, {
  collection: 'Card',
  timestamps: true,

  methods: {
    log() {
      return `${this.title} (${this.author}): ` + 
             `${this.content.slice(0, 32)} (...)`;
    },
  },
});

export const CardModel = model('Card', schema);