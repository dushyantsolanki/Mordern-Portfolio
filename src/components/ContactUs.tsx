'use client'

import { AirplayIcon, Send } from 'lucide-react'
import React, { useState } from 'react'

const ContactUs = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: "",
        message: ''
    })

    const handleSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData, 'Form Data')
        setFormData({ ...formData, fullname: '', email: '', message: '' })
    }
    return (
        <header className='mb-4'>

            <h1 className='text-2xl font-semibold mb-6'> Contact Form  </h1>

            <form className="w-full" onSubmit={handleSubmite}>
                <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-[25px] mb-[25px]">
                    <input
                        type="text"
                        name="fullname"
                        className="text-[#F5F6F5] text-[14px] font-normal py-[13px] px-5 border border-[#383838] rounded-[14px] outline-none placeholder:font-medium  focus:border-[#57da4be1]  invalid:focus:border-[#D32F2F]"
                        placeholder="Full name"
                        required
                        value={formData.fullname}
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                    />
                    <input
                        type="email"
                        name="email"
                        className="text-[#F5F6F5] text-[14px] font-normal py-[13px] px-5 border border-[#383838] rounded-[14px] outline-none placeholder:font-medium focus:border-[#57da4be1] invalid:focus:border-[#D32F2F]"
                        placeholder="Email address"
                        required
                        value={formData.email}
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                    />
                </div>

                <textarea
                    name="message"
                    className="text-[#F5F6F5] w-full text-[14px] font-normal py-[13px] px-5 border border-[#383838] rounded-[14px] outline-none placeholder:font-medium focus:border-[#57da4be1] invalid:focus:border-[#D32F2F] min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] "
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                ></textarea>

                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="cursor-pointer relative  flex justify-center items-center gap-[10px] py-[13px] px-5 rounded-[14px] text-[#07ff45c0] text-[14px] capitalize shadow-[0_16px_40px_rgba(0,0,0,0.25)] z-10 transition duration-250 ease bg-gradient-to-br from-[#404040] to-[rgba(64,64,64,0)] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-to-br before:from-[rgba(43,43,64,0.251)] before:to-[rgba(43,43,64,0)] before:bg-[#252525ea] before:rounded-[inherit] before:z-[-1] before:transition before:duration-250 before:ease hover:bg-white/10"
                    >
                        <Send className='h-5 w-5' />
                        <span>Send Message</span>
                    </button>
                </div>
            </form>


        </header>
    )
}

export default ContactUs