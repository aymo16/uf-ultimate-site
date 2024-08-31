"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-blue-800`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Can anyone join UF Ultimate Frisbee?",
    answer: "Yes! UF Ultimate Frisbee is open to all students at the University of Florida, regardless of experience level. We welcome beginners as well as experienced players. If you're interested, come to one of our practices or reach out to us for more information.",
  },
  {
    question: "Where and when are practices?",
    answer: "Fall 2024 Practice Schedule: Tuesday 6-8 PM at Lake Alice and Thursday 8-10 PM at Maguire Field. Be sure to bring water and cleats!",
  },
  {
    question: "How can I get involved if I’m new to Ultimate Frisbee?",
    answer: "If you're new to Ultimate Frisbee, don't worry! Our team is very beginner-friendly, and we regularly teach new players the basics of the game. Just show up to practice, and our experienced players and coaches will help you get started.",
  },
];

