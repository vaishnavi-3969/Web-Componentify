import React from 'react'

export default function Accordion() {
  return (
    <div class="w-[500px] px-5 bg-white rounded-[20px] shadow-[5px_5px_0px_0px_rgba(90,40,217)]">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 tracking-tight">
			FAQ
		</h2>
		<p class="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
		<a target='_blank' href='https://github.com/vaishnavi-3969/Web-Componentify'  className="bg-gray-800 hover:bg-gray-950 flex justify-center items-center rounded-[20px] h-[60px] w-[200px] text-white"
			  
		>
			REPOSITORY
		</a>
	</div>
	<div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		 <EachComponent title={"What is Web Componentify?"} innerItem={"Web Componentify is an open-source repository dedicated to simplifying web development by providing a collection of reusable components. Whether you're building a website, web application, or mobile app, you'll find a wide range of components, from headers and footers to buttons and dropdowns, available in various popular frameworks and languages."}/>
		 <EachComponent title={"How It Works?"} innerItem={"Anyone can contribute by creating and sharing their reusable components. Whether you're working with React, React Native, HTML, CSS, JavaScript, Vue, Angular, or any other web technology, your contributions are welcome!"}/>
		 <EachComponent title={"Getting Started?"} innerItem={"Explore the components, find what you need, and start integrating them into your projects. Contribute your own components to help fellow developers simplify their work. Join our open and inclusive community of web enthusiasts. Let's make web development faster, easier, and more collaborative. Explore, contribute, and build amazing web experiences together!"}/>
	</div>
</div>
  )
}
 function EachComponent({title,innerItem}){
	return <div class="py-5">
	<details class="group">
		<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
			<span>{title}</span>
			<span class="transition group-open:rotate-180">
		<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
		</svg>
	  </span>
		</summary>
		<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
			 {innerItem}
		</p>
	</details>
</div>
 }