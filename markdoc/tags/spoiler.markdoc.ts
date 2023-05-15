import {Spoiler} from '../../components';

export const spoiler = {
  render: Spoiler,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
  },
};
