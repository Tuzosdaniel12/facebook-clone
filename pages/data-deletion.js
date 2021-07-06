import React from 'react'
import Image from 'next/dist/client/image';

const DataDeletion = () => {
    return (
		<div className="grid place-items-center">
			<Image
				src="https://links.papareact.com/t4i"
				height={400}
				width={400}
				objectFit="contain"
				alt="facebook"
			/>
			
            <h1 className="p-5 bg-blue-500 rounded-full text-white text-center">
                Data Deletion Disclaimer
            </h1>
            <p className="p-2 text-black text-center">
                This site is for education purpose, it is only build to showcase the ability of the developer to match the styling of facebook page. Any information used to log in will not be saved in a database. If you have created a post you simply delete the post by pressing trash icon. Any questions send email to danielsoledad@gmail.com 
            </p>
		</div>
	);
}



export default DataDeletion;
