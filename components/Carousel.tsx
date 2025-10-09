"use client";

import Carousel from "@/components/ui/carousel";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { motion } from "motion/react";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modalContent: {
        title: "Mystic Mountains",
        description: "Discover the serenity of mountain peaks",
        images: [
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
          "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
          "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500",
        ],
        features: [
          { icon: "🏔️", text: "5 mountain trails" },
          { icon: "🏕️", text: "3 camping sites" },
          { icon: "🚡", text: "Cable car access" },
          { icon: "📸", text: "Photo opportunities" },
          { icon: "🥾", text: "Guided hiking" },
          { icon: "🌄", text: "Sunrise views" },
        ],
      },
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modalContent: {
        title: "Urban Dreams",
        description: "Experience the pulse of city life",
        images: [
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500",
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500",
          "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500",
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500",
          "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500",
        ],
        features: [
          { icon: "🏙️", text: "10 city landmarks" },
          { icon: "🍽️", text: "50+ restaurants" },
          { icon: "🎭", text: "Theater shows" },
          { icon: "🛍️", text: "Shopping districts" },
          { icon: "🚇", text: "Metro access" },
          { icon: "🌃", text: "Nightlife spots" },
        ],
      },
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modalContent: {
        title: "Neon Nights",
        description: "Immerse in vibrant nightlife",
        images: [
          "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500",
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500",
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500",
          "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=500",
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500",
        ],
        features: [
          { icon: "🎵", text: "Live music" },
          { icon: "🍹", text: "Cocktail bars" },
          { icon: "💃", text: "Dance clubs" },
          { icon: "🎨", text: "Art galleries" },
          { icon: "🎤", text: "Karaoke nights" },
          { icon: "🌟", text: "Rooftop venues" },
        ],
      },
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      modalContent: {
        title: "Desert Whispers",
        description: "Journey through endless sands",
        images: [
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500",
          "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500",
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500",
          "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500",
          "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500",
        ],
        features: [
          { icon: "🐪", text: "Camel rides" },
          { icon: "⛺", text: "Desert camping" },
          { icon: "🌅", text: "Sunset tours" },
          { icon: "🏜️", text: "Dune bashing" },
          { icon: "⭐", text: "Stargazing" },
          { icon: "🔥", text: "Bonfire nights" },
        ],
      },
    },
  ];

  // Create a modified version of slideData with modal buttons
  const slidesWithModals = slideData.map((slide) => ({
    ...slide,
    buttonComponent: (
      <Modal>
        <ModalTrigger className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-center group/modal-btn px-6 py-2 rounded-full hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300">
          <span className="group-hover/modal-btn:translate-x-10 text-center transition duration-500">
            {slide.button}
          </span>
          <div className="-translate-x-10 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✨
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Explore{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                {slide.modalContent.title}
              </span>{" "}
              ✨
            </h4>
            <p className="text-center text-neutral-500 dark:text-neutral-400 mb-6">
              {slide.modalContent.description}
            </p>
            <div className="flex justify-center items-center">
              {slide.modalContent.images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt={slide.modalContent.title}
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              {slide.modalContent.features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-center">
                  <span className="mr-2 text-2xl">{feature.icon}</span>
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    ),
  }));

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slidesWithModals} />
    </div>
  );
}