import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import icnWhatsapp from '@/assets/images/social/icn_whatsapp_w.png'
import icnLinkedin from '@/assets/images/social/icn_linkedin_w.png'
import icnYoutube from '@/assets/images/social/icn_youtube_w.png'
import icnTwitter from '@/assets/images/social/icn_twitter_w.png'
import icnFacebook from '@/assets/images/social/icn_facebook_w.png'

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top Section - Blue Background */}
      <div className="bg-primary-dark text-white py-12">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Lost or stolen cards */}
            <div>
              <h3 className="text-xl md:text-2xl mb-3">Lost or stolen cards</h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <span className="text-sm">Local</span>
                  <a href="tel:0800020600" className="text-sm hover:underline underline-offset-4">0800 020 600</a>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm">International</span>
                  <a href="tel:+27108241515" className="text-sm hover:underline underline-offset-4">+27 10 824 1515</a>
                </div>
              </div>
            </div>

            {/* Get in touch */}
            <div>
              <h3 className="text-xl md:text-2xl mb-3">Get in touch</h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <span className="text-sm">Local</span>
                  <a href="tel:0860123000" className="text-sm hover:underline underline-offset-4">0860 123 000</a>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm">International</span>
                  <a href="tel:+27108241515" className="text-sm hover:underline underline-offset-4">+27 10 824 1515</a>
                </div>
              </div>
            </div>



            {/* Report unethical behaviour */}
            <div>
              <h3 className="text-xl md:text-2xl mb-3">Report unethical behaviour</h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <span className="text-sm">Local</span>
                  <a href="tel:0800020600" className="text-sm hover:underline underline-offset-4">0800 020 600</a>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm">Email</span>
                  <a href="mailto:whistleblowingline@tip-offs.com" className="text-sm hover:underline underline-offset-4 break-all">whistleblowingline@tip-offs.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-6">
            {/* Get to know us */}
            <div>
              <h3 className="text-xl md:text-2xl mb-3">Get to know us</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Standard Bank Group <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Investor relations <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Who we sponsor <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    News and media <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Find a branch <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Report a fraud incident */}
            <div>
              <h3 className="text-xl md:text-2xl mb-3">Report a fraud incident</h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-start">
                  <span className="text-sm">Local</span>
                  <a href="tel:0800222050" className="text-sm hover:underline underline-offset-4">0800 222 050</a>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm">International</span>
                  <a href="tel:+27108241515" className="text-sm hover:underline underline-offset-4">+27 10 824 1515</a>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm">Email</span>
                  <a href="mailto:Reportfraud@standardbank.co.za" className="text-sm hover:underline underline-offset-4 break-all">Reportfraud@standardbank.co.za</a>
                </div>
              </div>
            </div>

            {/* Right side links */}
            <div>
              <ul className="space-y-2.5">
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Click here for more information about unethical behaviour <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Compliments or complaints <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Give us a call <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline underline-offset-4 flex items-center gap-1">
                    Contact us <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Blue Background */}
      <div className="bg-[#00164E] text-white py-8">
        <div className="page-container">
          {/* Footer Links */}
          <div className='flex gap-x-6 gap-y-8 items-center justify-between flex-col md:flex-row'>
          <div className='w-full max-w-4xl'>
          <div className="flex flex-wrap gap-4 md:gap-6 mb-6 text-sm font-medium">
            <Link href="#" className="hover:underline underline-offset-4">Security Centre</Link>
            <Link href="#" className="hover:underline underline-offset-4">Data Privacy Centre</Link>
            <Link href="#" className="hover:underline underline-offset-4">Regulatory</Link>
            <Link href="#" className="hover:underline underline-offset-4">Legal</Link>
            <Link href="#" className="hover:underline underline-offset-4">Manage Cookies</Link>
            <Link href="#" className="hover:underline underline-offset-4">Terms & Conditions</Link>
            <Link href="#" className="hover:underline underline-offset-4">Pricing</Link>
          </div>

          {/* Disclaimer */}
          <div>
            <p className="text-sm md:text-base leading-relaxed text-neutral-300">
              Standard Bank is a licensed financial services provider in terms of the Financial Advisory and Intermediary Services 
              Act and a registered credit provider in terms of the National Credit Act, registration number NCRCP15
            </p>
          </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 md:gap-4">
            <Link 
              href="https://wa.me/" 
              target="_blank" 
              className="w-12 h-12"
              aria-label="WhatsApp"
            >
              <Image src={icnWhatsapp} alt="WhatsApp" width={48} height={48} />
            </Link>
            <Link 
              href="https://linkedin.com/" 
              target="_blank" 
              className="w-12 h-12"
              aria-label="LinkedIn"
            >
              <Image src={icnLinkedin} alt="LinkedIn" width={48} height={48} />
            </Link>
            <Link 
              href="https://youtube.com/" 
              target="_blank" 
              className="w-12 h-12"
              aria-label="YouTube"
            >
              <Image src={icnYoutube} alt="YouTube" width={48} height={48} />
            </Link>
            <Link 
              href="https://twitter.com/" 
              target="_blank" 
              className="w-12 h-12"
              aria-label="X (Twitter)"
            >
              <Image src={icnTwitter} alt="Twitter" width={48} height={48} />
            </Link>
            <Link 
              href="https://facebook.com/" 
              target="_blank" 
              className="w-12 h-12"
              aria-label="Facebook"
            >
              <Image src={icnFacebook} alt="Facebook" width={48} height={48} />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer