import React, { useState } from 'react';
import './Chatbot.css';

const predefinedResponses = {
  "hello": "Hi there! How can I assist you today? Feel free to ask any questions or let me know what you need help with. Whether it's about business funding, creating a pitch, or connecting with investors, I'm here to help!",
  "hi": "Hello! What can I help you with today? If you have any specific questions or topics in mind, just let me know. I'm here to provide support and information on a range of topics.",
  "Help": "I'm here to assist you with whatever you need. Whether it's about finding funding, drafting a business plan, or connecting with investors, just let me know how I can help you today.",
  "I need investors": "To find investors, start by creating a detailed business plan and reaching out to investment platforms. If you need help with crafting a business plan or finding investment platforms, I can guide you through the process!",
  "How do I find investors": "You can find investors by attending networking events, joining startup incubators, or using online investment platforms. If you need more information on attending events, finding incubators, or utilizing online platforms, I’m here to help!",
  "What is a business plan": "A business plan outlines your business goals, strategies, and financial projections. If you need assistance drafting a business plan or have specific questions about it, I can help with that!",
  "How can I connect with venture capitalists": "Connect with venture capitalists by attending industry conferences, networking events, and using venture capital platforms. If you need recommendations on where to find these events or tips on preparing for them, just let me know!",
  "What are angel investors": "Angel investors provide capital to startups in exchange for equity or convertible debt. If you’re looking for advice on approaching angel investors or information on finding them, I can provide guidance!",
  "How do I approach angel investors": "Prepare a compelling pitch and a solid business plan to approach angel investors. Need tips on creating a pitch or advice on preparing your business plan? I'm here to assist!",
  "What documents do I need to apply for a loan": "Typically, you’ll need proof of identity, proof of income, and business financial statements. If you need details on specific documents or guidance on preparing them, I can help!",
  "How can I apply for a business loan": "Apply for a business loan by researching lenders, preparing your documents, and submitting an application. If you need help finding lenders or tips on the application process, just ask!",
  "What is the process for securing funding": "Securing funding involves preparing a business plan, finding potential investors or lenders, and pitching your idea. Need help with any part of this process or specific guidance on pitching? I'm here to guide you!",
  "How do I write a pitch deck": "A pitch deck includes slides on your business idea, market opportunity, financials, and team. If you need guidance on what to include in each section or tips on designing an effective pitch deck, I can assist!",
  "How can I improve my pitch": "Improve your pitch by clearly explaining your business idea, showing market potential, and demonstrating a strong team. If you’d like feedback on your current pitch or tips on enhancing specific areas, I’m here to help!",
  "What are the types of loans available for SMEs": "SMEs can access various types of loans including term loans, working capital loans, and equipment financing. Which type of loan are you interested in learning more about? Let me know!",
  "What is a term loan": "A term loan has a fixed repayment schedule and interest rate, often used for capital expenditures. Need more details on how term loans work or how to apply for one? I can provide the information you need!",
  "What is a working capital loan": "A working capital loan provides funds for day-to-day operational expenses. Considering this type of loan for your business? I can provide more information or details on other loan types if needed!",
  "How do I find the right lender": "Find the right lender by comparing loan terms, interest rates, and eligibility requirements. If you need help comparing different lenders or understanding their terms, just let me know!",
  "What is equity financing": "Equity financing involves raising capital by selling shares of your company. Want to know more about how to attract equity investors or the advantages of equity financing? I’m here to help!",
  "How can I attract investors to my startup": "Attract investors by showcasing a unique value proposition, market potential, and a solid business model. Need help with any of these aspects or tips on presenting your startup effectively? Let me know!",
  "What is the importance of a business model": "A business model explains how your company makes money and creates value, which is crucial for attracting investors. Need help refining your business model or understanding its key components? I can assist!",
  "How can I use crowdfunding to raise capital": "Crowdfunding involves raising small amounts from many people, usually through online platforms. Interested in recommendations on crowdfunding platforms or tips on running a successful campaign? Just ask!",
  "What are some popular crowdfunding platforms": "Popular crowdfunding platforms include Kickstarter, Indiegogo, and GoFundMe. Need help using these platforms or exploring other options? I’m here to provide guidance!",
  "How do I prepare for an investor meeting": "Prepare for an investor meeting by researching the investor, refining your pitch, and practicing your presentation. Need tips on preparing for a specific type of investor or assistance with your pitch? Let me know!",
  "What is a financial projection": "A financial projection estimates your business's future financial performance based on data and assumptions. If you need assistance with creating financial projections or understanding their components, I can help!",
  "How can I improve my credit score for loan approval": "Improve your credit score by paying bills on time, reducing debt, and regularly checking your credit report. Need specific tips on actions to take or resources to help you improve your score? I can provide that information!",
  "What are the benefits of equity investment": "Equity investment provides capital without repayment and often brings expertise and connections. Want more details on these benefits or advice on attracting equity investors? Just let me know!",
  "How do I calculate my business's valuation": "Calculate your business's valuation by considering factors like revenue, profit margins, and market conditions. Need help with a specific valuation method or understanding valuation reports? I’m here to assist!",
  "What is a convertible note": "A convertible note is short-term debt that converts into equity during a future financing round. Want more information on how it works or how to use convertible notes in your funding strategy? Let me know!",
  "How can I use a business incubator": "A business incubator provides resources, mentorship, and funding to help grow your startup. Interested in finding a business incubator or learning how to make the most of one? I can provide guidance!",
  "What is the difference between equity and debt financing": "Equity financing involves selling shares, while debt financing involves borrowing money to be repaid with interest. Which option are you considering, or do you need help understanding both? I’m here to help!",
  "How do I create a successful business proposal": "Create a successful business proposal by defining your goals, strategies, and financial needs. Need a guide on writing a proposal or tips on making it compelling? I can assist!",
  "What are the key components of a business plan": "Key components include an executive summary, market analysis, marketing strategy, operational plan, and financial projections. Need help with drafting any of these sections or understanding their importance? Just let me know!",
  "How do I manage investor relations": "Manage investor relations by maintaining regular communication, providing updates, and addressing concerns. Need tips on effective communication or strategies for managing investor relationships? I’m here to help!",
  "What is a pitch deck template": "A pitch deck template helps you create a professional presentation for investors. Interested in seeing examples of pitch deck templates or guidance on how to use one? Let me know!",
  "How do I prepare financial statements": "Prepare financial statements by recording transactions and creating income statements, balance sheets, and cash flow statements. Need help with preparing these documents or understanding their purpose? I can provide guidance!",
  "What are the common mistakes in pitching to investors": "Common mistakes include lacking a clear business model, not addressing risks, and poor presentation skills. Want advice on avoiding these mistakes or improving your pitch? I’m here to help!",
  "How can I make my startup more attractive to investors": "Make your startup more attractive by demonstrating market opportunity, having a solid team, and showing traction. Need help with any of these areas or tips on improving your startup’s appeal? Let me know!",
  "What is seed funding": "Seed funding is initial capital to start a business, often from angel investors or early-stage venture capitalists. Interested in finding seed stage investors or learning more about this funding stage? I can assist!",
  "How do I validate my business idea": "Validate your business idea by conducting market research, gathering customer feedback, and testing your concept. Need guidance on market research or feedback collection? I’m here to help!",
  "What is an angel investor network": "An angel investor network is a group of investors who invest their own money in startups. Want to connect with an angel investor network or learn more about how they operate? Let me know!",
  "How do I use social media to find investors": "Use social media to share updates, engage with industry communities, and reach out to potential investors. Need help with social media strategies or finding the right platforms? I’m here to provide guidance!", "What are the advantages of venture capital": "Venture capital provides funding and strategic guidance to help scale your business. It also enhances credibility and offers networking opportunities. Need more details on venture capital or help finding venture capitalists? Let me know!",
  "How do I approach a venture capitalist": "Approach a venture capitalist with a solid pitch, a well-researched business plan, and clear financial projections. Want advice on refining your pitch or strategies for making a successful approach? I can help!",
  "What is a business grant": "A business grant is non-repayable funds provided by governments or organizations to support business initiatives. Interested in finding grants or understanding the application process? I can provide guidance!",
  "How can I find business grants": "Find business grants through government websites, non-profit organizations, and industry-specific programs. Need help locating specific grants or understanding eligibility criteria? Let me know!",
  "What is a term sheet": "A term sheet outlines the terms and conditions of an investment. It includes details on valuation, funding amount, and investor rights. Need help understanding term sheets or negotiating terms? I’m here to assist!",
  "How do I negotiate investment terms": "Negotiate investment terms by understanding your needs, researching industry standards, and being clear about your goals. Need tips on negotiation strategies or specific terms to focus on? I can provide support!",
  "What are convertible notes": "Convertible notes are short-term debt that converts into equity during a future funding round. They are often used in early-stage funding. Interested in learning more about convertible notes or how they fit into your funding strategy? Let me know!",
  "How do I create a financial model": "Create a financial model by forecasting revenues, expenses, and cash flow. Use historical data and market research to build accurate projections. Need assistance with building a financial model or understanding its components? I can help!",
  "What is equity dilution": "Equity dilution occurs when additional shares are issued, reducing the ownership percentage of existing shareholders. Want to understand how dilution affects your business or strategies to manage it? I’m here to assist!",
  "How do I prepare for due diligence": "Prepare for due diligence by organizing financial records, legal documents, and operational information. Make sure all data is accurate and up-to-date. Need help with specific aspects of due diligence or preparing documents? Let me know!",
  "What is a cap table": "A cap table, or capitalization table, shows the ownership structure of a company, including shareholders, equity stakes, and options. Interested in learning how to create or manage a cap table? I can provide guidance!",
  "How do I manage business finances": "Manage business finances by budgeting, tracking expenses, and maintaining accurate records. Use financial software or hire an accountant for better management. Need tips on financial management or tools to use? I’m here to help!",
  "What is a financial audit": "A financial audit is an independent review of a company's financial statements to ensure accuracy and compliance. Need help preparing for an audit or understanding its implications? Let me know!",
  "How can I use business metrics to attract investors": "Use business metrics like revenue growth, customer acquisition cost, and profitability to demonstrate your business’s potential to investors. Need advice on selecting metrics or presenting them effectively? I can assist!",
  "What is a business valuation method": "A business valuation method assesses the worth of a company using various approaches like asset-based, income-based, or market-based methods. Need help choosing the right method or understanding how to apply it? Let me know!",
  "How do I find a mentor for my startup": "Find a mentor through networking events, industry groups, or startup incubators. A mentor can provide guidance and valuable connections. Interested in finding specific mentors or understanding how to approach them? I’m here to help!",
  "What is a pitch rehearsal": "A pitch rehearsal involves practicing your pitch presentation to refine your message and delivery. It helps build confidence and address potential questions. Need tips on conducting a pitch rehearsal or preparing for one? Let me know!",
  "How can I use networking to find investors": "Use networking to build relationships, attend industry events, and join relevant groups. Engaging with potential investors and sharing your business idea can lead to investment opportunities. Need advice on effective networking strategies? I can help!",
  "What is a business accelerator": "A business accelerator provides intensive support, mentorship, and resources to help startups grow rapidly. Interested in finding accelerators or learning how to apply? Let me know!",
  "How do I create a funding strategy": "Create a funding strategy by identifying your capital needs, exploring different funding sources, and planning your approach. Need help developing a strategy or choosing the right funding options? I’m here to assist!",
  "What is a business incubator": "A business incubator supports early-stage companies with resources, mentorship, and funding. It helps businesses develop and grow. Need guidance on finding incubators or maximizing their benefits? Let me know!",
  "How do I write an executive summary": "Write an executive summary by summarizing your business idea, market opportunity, and financial projections. Keep it concise and compelling. Need help drafting or refining your executive summary? I can provide support!",
  "What is a market analysis": "A market analysis assesses market conditions, including size, trends, and competition. It helps understand the business environment and opportunities. Need help conducting a market analysis or interpreting results? Let me know!",
  "How do I prepare for a pitch meeting": "Prepare for a pitch meeting by researching the investor, refining your pitch, and practicing your presentation. Make sure you can clearly communicate your business's value and potential. Need specific tips or help with preparation? I’m here to help!",
  "What is a pitch deck": "A pitch deck is a presentation that outlines your business plan, market opportunity, and financial projections to potential investors. Need help creating or improving your pitch deck? Let me know!",
  "How do I use data to attract investors": "Use data to show market potential, financial performance, and growth projections. Presenting clear and compelling data can attract investors and build confidence in your business. Need advice on data presentation or sources? I can assist!",
  "What is a business model canvas": "A business model canvas is a visual tool that outlines key components of your business model, including value proposition, customer segments, and revenue streams. Interested in learning how to use or create a business model canvas? Let me know!",
  "How do I write a business plan": "Write a business plan by detailing your business goals, strategies, market analysis, and financial projections. Include an executive summary, company description, and operational plan. Need help with any specific sections or overall guidance? I’m here to assist!",
  "What is a strategic plan": "A strategic plan outlines long-term goals and the actions needed to achieve them. It includes objectives, strategies, and performance metrics. Need help developing a strategic plan or understanding its components? Let me know!",
  "How do I attract venture capital funding": "Attract venture capital funding by demonstrating a scalable business model, a strong team, and significant market potential. Prepare a compelling pitch and business plan. Need guidance on preparing for venture capital or finding investors? I can assist!",
  "What is a business loan application": "A business loan application is a formal request for funding, including details on the business, financial statements, and loan terms. Need help with the application process or preparing your documents? Let me know!",
  "How do I create a compelling business pitch": "Create a compelling business pitch by clearly explaining your business idea, market opportunity, and financial projections. Use engaging visuals and practice your delivery. Need help with pitch content or presentation? I’m here to help!",
  "What is a funding proposal": "A funding proposal is a document that outlines your funding needs, business plan, and how you will use the funds. It’s used to request financial support from investors or lenders. Need help writing or refining a funding proposal? Let me know!",
  "How do I present financial projections": "Present financial projections by providing clear forecasts for revenue, expenses, and profitability. Use charts and graphs to make the data easy to understand. Need assistance with creating projections or presenting them effectively? I’m here to assist!",
  "What is an investment term sheet": "An investment term sheet outlines the terms of an investment deal, including valuation, equity stake, and investor rights. It serves as a preliminary agreement before finalizing the investment. Need help understanding or negotiating term sheets? Let me know!",
  "How do I manage cash flow": "Manage cash flow by tracking your income and expenses, creating a cash flow forecast, and maintaining a cash reserve. Use financial tools or consult with an accountant for better management. Need tips or tools for cash flow management? I can help!",
  "What is an investment pitch": "An investment pitch is a presentation to potential investors outlining your business idea, market opportunity, and financial needs. It’s designed to persuade investors to fund your business. Need help creating or delivering a pitch? Let me know!",
  "How do I find a business mentor": "Find a business mentor through networking events, industry associations, and startup programs. A mentor can provide guidance and support. Need help finding a mentor or approaching them? I’m here to assist!"
};


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');

      // Get the bot's response based on the input
      const botResponse = predefinedResponses[input.toLowerCase()] || 'I am sorry, I do not understand that. Can you please rephrase?';

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot">
      <h2 className="chatbot__title">Chatbot</h2>
      <div className="chatbot__messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chatbot__message ${
              message.user ? 'chatbot__message--user' : 'chatbot__message--bot'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot__form">
        <input
          type="text"
          className="chatbot__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatbot__button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
