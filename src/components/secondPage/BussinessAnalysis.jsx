import React from 'react'

const BussinessAnalysis = () => {
  return (
    <div className=" rounded-lg lg:w-[95%] xl:w-[85%] md:w-[100%]  w-[95%] m-auto my-4 pt-2 pb-6 shadow-3xl bg-white">
      <span className="flex items-center justify-center text-2xl font-bold gap-x-2 ">
        <span>
          <svg width="30" height="30" viewBox="0 0 52 51" fill="none">
            <mask
              id="mask0_348_91"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="52"
              height="51"
            >
              <rect width="52" height="51" fill="#D9D9D9" />
            </mask>

            <g mask="url(#mask0_348_91)">
              <path
                d="M4.33366 42.5001C3.71977 42.5001 3.20519 42.2965 2.78991 41.8892C2.37463 41.4819 2.16699 40.9772 2.16699 40.3751V36.5501C2.16699 35.346 2.48296 34.2392 3.11491 33.2298C3.74685 32.2204 4.58644 31.4501 5.63366 30.9189C7.87255 29.821 10.1475 28.9975 12.4587 28.4486C14.7698 27.8996 17.117 27.6251 19.5003 27.6251C21.8837 27.6251 24.2309 27.8996 26.542 28.4486C28.8531 28.9975 31.1281 29.821 33.367 30.9189C34.4142 31.4501 35.2538 32.2204 35.8857 33.2298C36.5177 34.2392 36.8337 35.346 36.8337 36.5501V40.3751C36.8337 40.9772 36.626 41.4819 36.2107 41.8892C35.7955 42.2965 35.2809 42.5001 34.667 42.5001H4.33366ZM40.1378 42.5001C40.4628 42.2522 40.7156 41.9423 40.8962 41.5704C41.0767 41.1986 41.167 40.7824 41.167 40.322V36.1251C41.167 34.5668 40.7246 33.0704 39.8399 31.6361C38.9552 30.2017 37.7003 28.971 36.0753 27.9439C37.917 28.1564 39.6503 28.5194 41.2753 29.0329C42.9003 29.5465 44.417 30.1751 45.8253 30.9189C47.1253 31.6272 48.1184 32.4152 48.8045 33.2829C49.4906 34.1506 49.8337 35.098 49.8337 36.1251V40.3751C49.8337 40.9772 49.626 41.4819 49.2107 41.8892C48.7955 42.2965 48.2809 42.5001 47.667 42.5001H40.1378ZM19.5003 25.5001C17.117 25.5001 15.0767 24.6678 13.3795 23.0032C11.6823 21.3387 10.8337 19.3376 10.8337 17.0001C10.8337 14.6626 11.6823 12.6616 13.3795 10.997C15.0767 9.33241 17.117 8.50012 19.5003 8.50012C21.8837 8.50012 23.9239 9.33241 25.6212 10.997C27.3184 12.6616 28.167 14.6626 28.167 17.0001C28.167 19.3376 27.3184 21.3387 25.6212 23.0032C23.9239 24.6678 21.8837 25.5001 19.5003 25.5001ZM41.167 17.0001C41.167 19.3376 40.3184 21.3387 38.6212 23.0032C36.9239 24.6678 34.8837 25.5001 32.5003 25.5001C32.1031 25.5001 31.5975 25.4558 30.9837 25.3673C30.3698 25.2788 29.8642 25.1814 29.467 25.0751C30.442 23.9418 31.1913 22.6845 31.7149 21.3032C32.2385 19.922 32.5003 18.4876 32.5003 17.0001C32.5003 15.5126 32.2385 14.0782 31.7149 12.697C31.1913 11.3157 30.442 10.0585 29.467 8.92512C29.9725 8.74804 30.4781 8.63293 30.9837 8.57981C31.4892 8.52668 31.9948 8.50012 32.5003 8.50012C34.8837 8.50012 36.9239 9.33241 38.6212 10.997C40.3184 12.6616 41.167 14.6626 41.167 17.0001ZM6.50033 38.2501H32.5003V36.5501C32.5003 36.1605 32.401 35.8064 32.2024 35.4876C32.0038 35.1689 31.742 34.921 31.417 34.7439C29.467 33.7876 27.4989 33.0704 25.5128 32.5923C23.5267 32.1142 21.5225 31.8751 19.5003 31.8751C17.4781 31.8751 15.4739 32.1142 13.4878 32.5923C11.5017 33.0704 9.53366 33.7876 7.58366 34.7439C7.25866 34.921 6.99685 35.1689 6.79824 35.4876C6.59963 35.8064 6.50033 36.1605 6.50033 36.5501V38.2501ZM19.5003 21.2501C20.692 21.2501 21.7121 20.834 22.5607 20.0017C23.4094 19.1694 23.8337 18.1689 23.8337 17.0001C23.8337 15.8314 23.4094 14.8309 22.5607 13.9986C21.7121 13.1663 20.692 12.7501 19.5003 12.7501C18.3087 12.7501 17.2885 13.1663 16.4399 13.9986C15.5913 14.8309 15.167 15.8314 15.167 17.0001C15.167 18.1689 15.5913 19.1694 16.4399 20.0017C17.2885 20.834 18.3087 21.2501 19.5003 21.2501Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
        </span>
        <p> Business Analysis</p>
      </span>

      <ul className="px-5 py-5 space-y-4 font-medium text-justify list-none list-inside ">
        <li >
        <span className='font-bold'>  Business viability</span>
        
          <ol className="pl-5 mt-2 space-y-1 text-justify list-inside">
            <li>Viability Assessment: Atlas Al Consulting Co.</li>
            <li>
              Based on the provided information, Atlas Al Consulting Co. appears
              to have potential viability in the Al consulting and business
              renovation industry. Although the company is in its initial stages
              and has not yet achieved profitability, it has secured preliminary
              funding and received partnership offers from established 7-figure
              businesses.
            </li>
          </ol>
        </li>
        <li>
        <span className='font-bold'>Market Potential</span>  
          <ul className="pl-5 mt-2 space-y-1 list-decimal list-inside">
            <li>
              To assess the viability of Atlas Al Consulting Co, it is important
              to consider the market size and growth potential of the Al
              consulting industry. According to a report by Grand View Research,
              the global Al consulting market size is expected to reach $31.2
              billion by 2028, growing at a CAGR 41.2% from 2021 to 2028[1].
              This indicates a significant market opportunity for companies
              operating in this space.
            </li>
          </ul>
        </li>
        <li>
        <span className='font-bold'>Strategic Focus</span>
          <ul className="pl-5 mt-2 space-y-1 list-inside">
            <li>
            Atlas Al Consulting Co. differentiates itself by focusing on creating automated deployable software to enhance the Lifetime Value (LTV) of businesses. By working exclusively with agencies trained in Al alignment and adhering to industry safety and quality standards, the company positions itself as a trendsetter in the industry. This unique value proposition can provide a competitive advantage in the rapidly evolving Al consulting landscape.
            </li>
          </ul>
        </li>
        <li>
        <span className='font-bold'>  Strategic Focus</span>
        
          <ul className="pl-5 mt-2 space-y-1 list-inside">
            <li>
            Atlas Al Consulting Co.'s strategic focus on hosting marketplace offers, empowering outsourcing agencies with skilled tools, and partnering with venture capital to overtake industries demonstrates a comprehensive approach to scaling and expanding its business. By targeting these verticals, the company aims to capitalize on identified opportunities and revolutionize the industry.
            </li>
          </ul>
        </li>
        <li>
        <span className='font-bold'>Conclusion</span>
       
          <ul className="pl-5 mt-2 space-y-1 list-inside">
            <li>
            In conclusion, Atlas Al Consulting Co. shows promise in the Al consulting and business renovation industry. With a market poised for significant growth, a unique value proposition, and a strategic focus on key verticals, the company has the potential to become a game-changer. However, it will need to overcome scalability and execution challenges, as well as navigate the competitive landscape. Investors, potential partners, and stakeholders should closely monitor the company's progress as it strives to redefine the Al consulting landscape.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default BussinessAnalysis
