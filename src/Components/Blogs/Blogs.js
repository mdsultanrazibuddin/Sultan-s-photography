import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text'>welcome to my blogs</h1>
            <div className='blog'>
                <div className='context'>
                    <h1> প্রশ্নঃ Authorization এবং Authentication এর মধ্যে পার্থক্য কি? </h1>
                    <p>
                        <span>উত্তরঃ</span> <br />
                        Authentication হল পরিচয় যাচাই করার জন্য ব্যবহারকারীর নাম/ইউজার আইডি এবং পাসওয়ার্ড যাচাই করা। পাবলিক এবং প্রাইভেট নেটওয়ার্কে, সিস্টেম লগইন পাসওয়ার্ডের মাধ্যমে ব্যবহারকারীর পরিচয় Authentication করে। Authentication সাধারণত একটি ব্যবহারকারীর নাম এবং পাসওয়ার্ড দ্বারা করা হয় । অন্যদিকে  Authorization হল নির্দিষ্ট সংস্থানগুলিতে  Authenticated ব্যবহারকারীর অ্যাক্সেস আছে কিনা তা নির্ধারণ করার প্রক্রিয়া। এটি আপনাকে তথ্য, ডাটাবেস, ফাইল ইত্যাদির মতো সংস্থানগুলিতে অ্যাক্সেস দেওয়ার জন্য আপনার অধিকারগুলি যাচাই করে৷ Authorization সাধারণত Authentication পরে আসে যা সম্পাদন করার জন্য আপনার বিশেষাধিকারগুলি নিশ্চিত করে৷ সহজ ভাষায়, এটি কাউকে কিছু বা কিছু করার জন্য সরকারী অনুমতি দেওয়ার মতো।
                    </p>
                </div>
                <div className='context'>
                    <h1> প্রশ্নঃ কেন আপনি FireBase ব্যবহার করছেন? Authentication বাস্তবায়নের জন্য আপনার কাছে অন্য কোন বিকল্প আছে?</h1>
                    <p>
                    <span>উত্তরঃ</span> <br />
                    আমি FireBase ব্যবহার করি , কারন Firebase উচ্চ-মানের অ্যাপ তৈরি করতে, ব্যবহারকারীর ভিত্তি বাড়াতে সাহায্য করে। 
                    </p>
                </div>
                <div className='context'>
                    <h1> প্রশ্নঃ কেন আপনি FireBase ব্যবহার করছেন? Authentication বাস্তবায়নের জন্য আপনার কাছে অন্য কোন বিকল্প আছে?</h1>
                    <p>
                    <span>উত্তরঃ</span> <br />
                    আমি FireBase ব্যবহার করি , কারন Firebase উচ্চ-মানের অ্যাপ তৈরি করতে, ব্যবহারকারীর ভিত্তি বাড়াতে সাহায্য করে। 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;