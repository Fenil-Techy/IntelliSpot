import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer=()=>{
    return (
       <footer class="bg-gray-900 text-gray-300 mt-10">
  <div class="max-w-7xl mx-auto px-6 py-15">

    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-20">

      <div class="order-1 lg:col-span-2 flex flex-col justify-center items-center">
        <h2 class=" text-2xl md:text-4xl font-bold text-white mb-4 p-4 border">
          IntelliSpot
        </h2>
        <p class="text-gray-400 text-sm md:max-w-md">
        The place where AI meets innovation.
        </p>

        
        <div class=" grid grid-cols-2 gap-4 mt-6">
          <a href="#" class="hover:text-white "><FaSquareXTwitter className="h-8 w-8 transistion-transform duration-200 hover:-translate-y-2" /></a>
          <a href="#" class="hover:text-white"><FaLinkedin className="h-8 w-8 transistion-transform duration-200 hover:-translate-y-2"/></a>
          <a href="#" class="hover:text-white"><FaGithub className="h-8 w-8 transistion-transform duration-200 hover:-translate-y-2"/></a>
          <a href="#" class="hover:text-white"><FaInstagram className="h-8 w-8 transistion-transform duration-200 hover:-translate-y-2"/></a>
        </div>
      </div>

     
      <div>
        <h4 class="text-white font-semibold mb-4">Explore</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">All Tools</a></li>
          <li><a href="#" class="hover:text-white">Categories</a></li>
          <li><a href="#" class="hover:text-white">Trending</a></li>
          <li><a href="#" class="hover:text-white">Prompts</a></li>
          <li><a href="#" class="hover:text-white">Bundles</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white w-30 font-semibold mb-4">For Creator</h4>
        <ul class="space-y-2">
          <li className="w-30"><a href="#" className="hover:text-white">Submit Tool</a></li>
          <li className="w-30"><a href="#" class="hover:text-white">Promote Tool</a></li>
          <li><a href="#" class="hover:text-white">Updates</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4">Comapny</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white">About</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
          <li className=""><a href="#" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white">Terms</a></li>
        </ul>
      </div>

    </div>   
    <div class="flex justify-center items-center mt-10 pt-6 text-sm text-gray-500">
      © 2025 IntelliSpot. All rights reserved.
    </div>

  </div>
</footer>

    )
}