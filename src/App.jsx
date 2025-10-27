import { ArrowLeft, ArrowRight, CircleQuestionMark, LayoutGrid, Plus } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

const App = () => {
  const [currentTab, setCurrentTab] = useState("About Me");
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(0);
  const btns = ["About Me", "Experiences", "Recommended"];
  
  return (
    <div className="h-screen w-full bg-black">
      <div className="h-full w-full rounded-[28px] bg-linear-to-b from-[#373E44] to-[#191B1F] flex items-center gap-10 pl-7 pr-20">
        <div className="h-[80%] w-[55%] border border-blue-500 rounded-[28px]"></div>
        <div className="h-[80%] w-[45%] flex flex-col gap-5 rounded-[28px]">
          <div className="upper py-6 px-4 h-[50%] bg-[#363C43] rounded-[28px] flex items-start justify-between">
            <div className="h-full flex flex-col justify-between">
              <CircleQuestionMark className="text-[#929CA6]" />
              <LayoutGrid className="text-[#929CA6]" />
              <span></span>
            </div>
            <div className="ml-5 mr-10 w-full">
              <div className="bg-[#171717] h-15 rounded-2xl flex items-center gap-2 px-2">
                {btns.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTab(btn)}
                    className={`sha py-3 w-[33%] rounded-xl ${currentTab === btn && "bg-[#28292F]"} hover:bg-[#28292F] ${
                      currentTab === btn ? "text-white" : "text-gray-500"
                    } font-semibold cursor-pointer`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <div className="h-40 mt-8 text-[#969696] overflow-y-auto scroll pr-4">
                {
                  currentTab === 'About Me' && (
                    <>
                      <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                      <br />
                      <p>
                        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                      </p>
                    </>
                  )
                }
                {
                  currentTab === 'Experiences' && (
                    <>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga ducimus officiis aspernatur, voluptatibus nam suscipit quaerat expedita corporis odit ratione, obcaecati delectus, debitis repudiandae tenetur. Mollitia assumenda id rerum est. Cumque, rerum similique. Consectetur, exercitationem sint aspernatur hic consequuntur, velit placeat dolores excepturi iure quod, enim voluptatem earum expedita nesciunt. Ullam, quidem. Praesentium in tenetur, earum illo nihil aperiam a dolorum hic omnis corrupti cum velit architecto cupiditate cumque nam nulla iusto dignissimos natus ex voluptatibus minima quae nemo dicta id. Quod neque quo quos incidunt mollitia quas vero earum? Molestias animi qui pariatur. Quod nihil fugit repellendus distinctio!</p>
                    </>
                  )
                }
                {
                  currentTab === 'Recommended' && (
                    <>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, exercitationem eaque sapiente, deleniti vero qui nobis sunt optio earum, tempora suscipit. Consequatur labore debitis neque molestias aliquam, quos autem consequuntur perspiciatis nihil enim optio facilis suscipit. Eum, ut! Consectetur aliquid molestias asperiores? Placeat sunt id, accusamus dolor vero ab.</p>
                    </>
                  )
                }
              </div>
            </div>
          </div>
          <hr className="h-2 rounded-2xl w-[80%] mx-auto bg-[#363C43] upper" />
          <div className="upper py-6 px-4 h-[50%] bg-[#363C43] rounded-[28px] flex items-start justify-between">
            <div className="h-full flex flex-col justify-between">
              <CircleQuestionMark className="text-[#929CA6]" />
              <LayoutGrid className="text-[#929CA6]" />
              <span></span>
            </div>
            <div className="ml-5 mr-10 w-full">
              <div className="flex items-center justify-between mr-4">
                <button className="bg-black text-white px-8 py-3 text-lg font-semibold rounded-2xl">
                  Gallery
                </button>
                <div className="flex items-center gap-8">
                  <label htmlFor="image" className="flex items-center gap-1 shad text-xs bg-[#41474D] px-4 py-3 rounded-full text-white font-semibold">
                    <Plus size={14}/> ADD IMAGE
                    <input onChange={(e) => setImages(prev => [...prev, e.target.files[0]])} type="file" id="image" hidden accept="image/*" />
                  </label>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setStart(prev => Math.max(prev-1,0))} className="size-10 rounded-full shad bg-[#24272A] flex items-center justify-center cursor-pointer">
                      <ArrowLeft className="text-[#494F53]"/>
                    </button> 
                    <button onClick={() => setStart(prev => Math.min(prev+1,images.length-1))} className="size-10 rounded-full shad bg-[#24272A] flex items-center justify-center cursor-pointer">
                      <ArrowRight className="text-[#494F53]"/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                {
                  images.length > 0 && images.slice(start,Math.min(start+3,images.length)).map((img,index) => (
                    <img key={index} src={URL.createObjectURL(img)} alt="img" className="hover:scale-110 transition-transform size-40 rounded-3xl object-cover shrink-0"/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
