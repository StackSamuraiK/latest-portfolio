"use client"

import { InstagramIcon, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!', {
                    style: {
                        background: '#18181b',
                        color: '#fff',
                        border: '1px solid #3f3f46'
                    },
                    iconTheme: {
                        primary: '#3b82f6',
                        secondary: '#18181b'
                    }
                });
                setFormData({ from_name: '', from_email: '', message: '' });
            } else {
                toast.error(data.error || 'Failed to send message. Please try again.', {
                    style: {
                        background: '#18181b',
                        color: '#fff',
                        border: '1px solid #3f3f46'
                    },
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: '#18181b'
                    }
                });
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again.', {
                style: {
                    background: '#18181b',
                    color: '#fff',
                    border: '1px solid #3f3f46'
                },
                iconTheme: {
                    primary: '#ef4444',
                    secondary: '#18181b'
                }
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact' className="bg-zinc-950 py-20 relative overflow-hidden">
            <Toaster position="bottom-right" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-8 gap-4 opacity-10 absolute inset-0">
                    {[...Array(64)].map((_, i) => (
                        <div
                            key={i}
                            className="h-full border-r border-t border-zinc-800"
                        ></div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                        Let's Connect
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-zinc-900/50 p-6 rounded-2xl backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 text-zinc-300">
                                    <div className="p-3 bg-zinc-800/50 rounded-lg">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>kshitizsrivastav3344@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 text-zinc-300">
                                    <div className="p-3 bg-zinc-800/50 rounded-lg">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span>+91 7054312258</span>
                                </div>
                                <div className="flex items-center space-x-4 text-zinc-300">
                                    <div className="p-3 bg-zinc-800/50 rounded-lg">
                                        <InstagramIcon className="w-5 h-5" />
                                    </div>
                                    <span>kshitiz.srivastav</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-800/50">
                        <form onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name='from_name'
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    name='from_email'
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};