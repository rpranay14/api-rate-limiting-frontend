import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQ = () => {
  const [selected, setSelected] = useState(-1);
  const faqs = [
    {
      ques: "How does AI photo restoration work to restore old photos AI?",
      ans: "AI photo restoration uses advanced algorithms to analyze and fix imperfections in old or damaged photos. It can perform tasks like retouching old photos, fixing pixelated images, and renewing old photos by restoring faded colors or repairing scratches.",
    },
    {
      ques: "Can I restore blurry photos with AI picture restore technology?",
      ans: "Yes, our tool specializes in restoring blurry photos by improving clarity and enhancing image quality. It’s one of the most effective solutions for fixing pixelated images and old photo recovery.",
    },
    {
      ques: "What makes your AI photo restoration tool the best photo restoration solution?",
      ans: "Our tool offers features like pixelated image fix, retouching old photos, and renewing old photos. It delivers quick, professional results that bring old pictures to new life with ease.",
    },
    {
      ques: "Can AI fix old photos that are torn or damaged?",
      ans: "Absolutely! Our AI to restore old photos is designed to repair old photos, remove scratches, and handle even severely damaged images. It's the perfect solution for restoring old damaged photos.",
    },
    {
      ques: "What is the process to restore old photos AI with your tool?",
      ans: "Simply upload your photo, let our AI photo restoration tool analyze the image, and download the restored version. It works efficiently to fix old photos, improve old photos, and retouch old photos for the best results.",
    },




    {
        ques: "Can I use this tool for old photo recovery and retouching?",
        ans: "Yes, our photo restoration AI tool is ideal for old photo recovery. It can restore my photos by fixing scratches, enhancing resolution, and transforming old pictures into vibrant, high-quality images.",
      },
      {
        ques: "Does the AI picture restore feature fix pixelated images and blurry photos?",
        ans: "Yes! The AI image restoration technology can fix pixelated images, restore blurry photos, and bring clarity back to your cherished memories.",
      },
      {
        ques: "What types of photos can AI old photo restoration repair?",
        ans: "Our AI restore old photos tool works on black-and-white photos, colored images, faded photos, and heavily damaged pictures. Whether you need to restore damaged photos or repair old photos, we’ve got you covered.",
      },
      {
        ques: "How secure is the AI photo restoration process?",
        ans: "Our tool ensures complete privacy and security. Uploaded photos are processed for AI image restoration and deleted immediately after restoration. You can safely restore my photos without worry.",
      },
      {
        ques: "Why should I choose your AI restore old photos tool over others?",
        ans: "Our AI photo restore solution combines pixelated image fix, retouching old photos, and restoring damaged photos into one powerful tool. It’s fast, secure, and offers the best photo restoration results, turning old photo to new photo effortlessly.",
      },
  ];
  return (
    <div className="flex items-center justify-center mt-8 py-20">
      <div className="w-[95%] md:w-[80%] lg:w-[60%] max-w-[900px]">
        <h2 className="w-[95%] text-2xl lg:text-4xl   text-center  font-bold lg:w-[60%] mx-auto ">
          Photo Restoration FAQs
        </h2>
        <div className="mt-16">
          {faqs.map((x, index) => (
            <div className="flex justify-between items-center  mb-3 border-b-2 py-4">
              <div className="w-[80%]">
                <p className="text-lg font-semibold mb-1">{x.ques}</p>
                {selected === index ? <p>{x.ans}</p> : <></>}
              </div>
              <div className="flex items-center justify-center bg-slate-200 rounded-full cursor-pointer">
                {" "}
                {selected === index ? (
                  <MdKeyboardArrowUp
                    onClick={() => setSelected(-1)}
                    className=" w-8 h-8"
                  />
                ) : (
                  <MdKeyboardArrowDown
                    onClick={() => setSelected(index)}
                    className="w-8 h-8"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
