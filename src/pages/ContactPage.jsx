import { useState } from 'react';
import { Mail, MapPin, Facebook, Instagram, Youtube, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const [submitStatus, setSubmitStatus] = useState(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    const onSubmit = async (data) => {
        try {
            setSubmitStatus(null);
            
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            const templateParams = {
                from_name: data.firstName,
                from_email: data.email,
                from_phone: data.phone,
                to_name: "Krishna Groups",
                message: data.message
            };

            const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            console.log("Email sent successfully:", response);
            setSubmitStatus('success');
            reset();
            
            setTimeout(() => setSubmitStatus(null), 5000);
            
        } catch (error) {
            console.error('Error sending mail:', error);
            setSubmitStatus('error');
            
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-700">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
               
                {submitStatus && (
                    <div className={`mb-6 p-4 rounded-xl shadow-lg transform transition-all duration-500 ${
                        submitStatus === 'success' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                            : 'bg-gradient-to-r from-red-500 to-rose-500'
                    } text-white flex items-center gap-3 animate-slide-down`}>
                        {submitStatus === 'success' ? (
                            <>
                                <CheckCircle size={24} />
                                <div>
                                    <p className="font-semibold">Message Sent Successfully!</p>
                                    <p className="text-sm opacity-90">Thank you for contacting us. We'll get back to you soon.</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <XCircle size={24} />
                                <div>
                                    <p className="font-semibold">Oops! Something went wrong</p>
                                    <p className="text-sm opacity-90">Please try again or contact us directly via email.</p>
                                </div>
                            </>
                        )}
                        <button 
                            onClick={() => setSubmitStatus(null)}
                            className="ml-auto text-white hover:bg-white/20 rounded-lg p-2 transition"
                        >
                            ×
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-shadow duration-300">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                            Send us a Message
                        </h2>

                        <div className="space-y-5">
                        
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                                        errors.firstName ? 'border-red-500' : 'border-slate-300'
                                    }`}
                                    placeholder="Enter your name"
                                    {...register('firstName', {
                                        required: "Full name is required",
                                        minLength: { value: 3, message: "Name must be at least 3 characters" }
                                    })}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <XCircle size={14} /> {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                           
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                                        errors.email ? 'border-red-500' : 'border-slate-300'
                                    }`}
                                    placeholder="your.email@example.com"
                                    {...register('email', { 
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <XCircle size={14} /> {errors.email.message}
                                    </p>
                                )}
                            </div>

                        
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition ${
                                        errors.phone ? 'border-red-500' : 'border-slate-300'
                                    }`}
                                    placeholder="+91 XXXXX XXXXX"
                                    {...register('phone', { 
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9+\s-()]{10,}$/,
                                            message: "Please enter a valid phone number"
                                        }
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <XCircle size={14} /> {errors.phone.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none ${
                                        errors.message ? 'border-red-500' : 'border-slate-300'
                                    }`}
                                    placeholder="Tell us more about your inquiry..."
                                    rows="5"
                                    {...register('message', { 
                                        required: "Message is required",
                                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                                    })}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                        <XCircle size={14} /> {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    
                    <div className="space-y-8">
                       
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-3xl transition-shadow duration-300">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent p-6 pb-4">
                                Find Us Here
                            </h2>
                            <div className="h-80 relative">
                                {!mapLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                                        <Loader2 size={40} className="text-purple-600 animate-spin" />
                                    </div>
                                )}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.577575397291!2d78.75941489357909!3d28.470848399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390adb4ba017ff67%3A0x5900f147ee13a168!2sKRISHNA%20E%20RICKSHAW%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1760466640457!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Company Location"
                                    onLoad={() => setMapLoaded(true)}
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 hover:shadow-3xl transition-shadow duration-300">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                                Get in Touch
                            </h2>

                            <div className="space-y-4 mb-6">
                                <a 
                                    href="mailto:krishnaevehicletraders@gmail.com"
                                    className="flex items-center gap-3 text-slate-700 hover:text-purple-600 transition-colors group"
                                >
                                    <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                                        <Mail size={20} className="text-purple-600" />
                                    </div>
                                    <span className="text-sm">krishnaevehicletraders@gmail.com</span>
                                </a>
                                
                                <div className="flex items-start gap-3 text-slate-700">
                                    <div className="p-2 bg-purple-100 rounded-lg mt-1">
                                        <MapPin size={20} className="text-purple-600" />
                                    </div>
                                    <span className="text-sm">Gumthal Road, Near Police Fire Station, Chandausi (Sambhal)</span>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Follow Us</h3>
                                <div className="flex gap-4 flex-wrap">
                                    <a 
                                        href="https://facebook.com" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={24} />
                                    </a>
                                    <a 
                                        href="https://instagram.com" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={24} />
                                    </a>
                                    <a 
                                        href="https://youtube.com" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
                                        aria-label="YouTube"
                                    >
                                        <Youtube size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style>{`
                @keyframes slide-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slide-down {
                    animation: slide-down 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default ContactPage;