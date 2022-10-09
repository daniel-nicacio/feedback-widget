import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "@headlessui/react";
import { feedbackTypes } from "..";
// import { rest } from "msw";
import {
  FeedbackContentStep,
  FeedbackContentStepProps,
} from "./FeedbackContentStep";

export default {
  title: "Widget UI/FeedbackContentStep",
  component: FeedbackContentStep,
  args: {
    feedbackType: "IDEA",
  },
  // parameters: {
  //   msw: {
  //     handlers: [
  //       rest.post("/feedbacks", (req, res, ctx) => {
  //         return res(
  //           ctx.json({
  //             message: "Success",
  //           })
  //         );
  //       }),
  //     ],
  //   },
  // },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: {
        type: "inline-radio",
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className="bg-zinc-800 relative px-4 pt-4 rounded-lg flex flex-col items-center w-96">
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
} as Meta<FeedbackContentStepProps>;

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "BUG",
  },
};
export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "IDEA",
  },
};
export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "OTHER",
  },
};
