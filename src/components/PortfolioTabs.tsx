import { useState } from "react";
import { Mail, Phone, Download, Moon, Sun, MapPin, Zap, Monitor, Server, Cloud, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import image from "../assets/abc.png"

export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("home");

  const handleResumeDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Sonal_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const TabButton = ({ id, children, isActive }: { id: string; children: React.ReactNode; isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap smooth-transition ${
        isActive
          ? "border-navy-600 text-navy-600"
          : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 smooth-transition">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 smooth-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-15 h-15 bg-gradient-to-r  flex items-center justify-center">
               
               <img src={image} className="object-cover rounded-full"/>
               
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Sonal Singh</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
              </div>
            </div>
           
           
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 smooth-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <TabButton id="home" isActive={activeTab === "home"}>Home & About</TabButton>
            <TabButton id="work" isActive={activeTab === "work"}>My Work</TabButton>
            <TabButton id="experience" isActive={activeTab === "experience"}>Experience</TabButton>
            <TabButton id="contact" isActive={activeTab === "contact"}>Contact</TabButton>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Home/About Tab */}
        {activeTab === "home" && (
          <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r  rounded-full flex items-center justify-center text-white text-4xl font-bold">
               <img src={image} className="w-30 h-30 object-cover rounded-full"/>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Full Stack Developer
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                Passionate about crafting scalable web and mobile applications with 3.5 years of experience in React, Node.js, Azure, and React Native development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  Available for hire
                </Badge>
                <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                  <Zap className="w-4 h-4 mr-2" />
                  3.5 Years Experience
                </Badge>
              </div>
            </section>

            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>
              <Card className="p-8">
                <CardContent className="space-y-6 p-0">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a dedicated Full Stack Developer with expertise in building scalable web and mobile applications. 
                    My experience spans across modern technologies including React.js, React Native, Node.js, and ASP.NET Core, 
                    with strong proficiency in Azure cloud deployments.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm passionate about crafting user-centric designs, optimizing performance, and delivering production-grade 
                    applications with advanced features like offline capabilities, biometric authentication, and push notifications. 
                    I thrive in Agile environments and enjoy collaborating with cross-functional teams to deliver exceptional results.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h2>
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Frontend Skills */}
                <Card className="card-hover smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Monitor className="w-6 h-6 text-navy-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React.js</Badge>
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Redux</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Backend Skills */}
                <Card className="card-hover smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Server className="w-6 h-6 text-emerald-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">ASP.NET Core</Badge>
                      <Badge variant="secondary">Web API</Badge>
                      <Badge variant="secondary">GraphQL</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Tools & Cloud */}
                <Card className="card-hover smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Cloud className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cloud & Tools</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Azure</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">Git</Badge>
                      <Badge variant="secondary">Agile</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {/* My Work Tab */}
        {activeTab === "work" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Work</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of projects that demonstrate my expertise in full-stack development, 
                from mobile applications to enterprise web solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* EG Club App Project */}
              <Card className="overflow-hidden card-hover smooth-transition">
                <div className="h-48 bg-gradient-to-br from-navy-600 to-blue-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-sm opacity-90">Mobile App</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">EG Club Australia App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Cross-platform mobile application built with React Native featuring location services, 
                    rewards system, biometric authentication, and real-time fuel price syncing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Azure Functions</Badge>
                    <Badge variant="outline">Biometric Auth</Badge>
                    <Badge variant="outline">Location Services</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    HorizonX • 2024
                  </div>
                </CardContent>
              </Card>

              {/* EG CMS Portal Project */}
              <Card className="overflow-hidden card-hover smooth-transition">
                <div className="h-48 bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                    </svg>
                    <p className="text-sm opacity-90">CMS Portal</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">EG Internal CMS Portal</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Full-stack content management system with robust backend functionality, 
                    user authentication, and intuitive admin interface for content creators.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Admin Dashboard</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    HorizonX • 2024
                  </div>
                </CardContent>
              </Card>

              {/* HelpDesk Pro Project */}
              <Card className="overflow-hidden card-hover smooth-transition">
                <div className="h-48 bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <p className="text-sm opacity-90">Support System</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">HelpDesk Pro</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Enterprise IT support ticket system with role-based dashboards, automated email notifications, 
                    and comprehensive reporting built with ASP.NET Core.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">ASP.NET Core</Badge>
                    <Badge variant="outline">Web API</Badge>
                    <Badge variant="outline">Role-based Auth</Badge>
                    <Badge variant="outline">Email Notifications</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    Dotsquares • 2022-2024
                  </div>
                </CardContent>
              </Card>

              {/* Client Projects */}
              <Card className="overflow-hidden card-hover smooth-transition">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                    <p className="text-sm opacity-90">Client Projects</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Enterprise Client Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Delivered location services and search functionality for major brands including Kate Spade, 
                    Away Resorts, and Coach with multi-language support across 7 locales.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Yext Search</Badge>
                    <Badge variant="outline">Jambo</Badge>
                    <Badge variant="outline">Multi-language</Badge>
                    <Badge variant="outline">Location Services</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    Multiple Clients • 2022-2024
                  </div>
                </CardContent>
              </Card>
               {/* Client Projects */}
             <Card className="overflow-hidden card-hover smooth-transition">
  <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
    <div className="text-white text-center">
      <svg
        className="w-16 h-16 mx-auto mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
        ></path>
      </svg>
      <p className="text-sm opacity-90">Next.js project</p>
    </div>
  </div>
  <CardContent className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
      Enterprise Client Solutions
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      Theme and layout changes when select from drop down
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge variant="outline">next.js</Badge>
      <Badge variant="outline">tailwind css</Badge>
      <Badge variant="outline">TypeScript</Badge>
    </div>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        ></path>
      </svg>
      2025
    </div>

    {/* Preview Button */}
    <button
      onClick={() => window.open("https://multi-theme-ngd3.vercel.app/", "_blank")}
      className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
    >
      Preview
    </button>
  </CardContent>
</Card>

            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                3.5 years of professional development experience across diverse projects and technologies.
              </p>
            </div>

            <div className="space-y-8">
              
              {/* HorizonX Experience */}
              <Card className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Full Stack Developer / Mobile Developer</h3>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">HX</span>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">HorizonX</p>
                        <p className="text-gray-600 dark:text-gray-300">July 2024 - Present</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                    Current Role
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Projects & Responsibilities:</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-navy-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">EG Club App (React Native + Azure Functions)</h5>
                        <p className="text-gray-600 dark:text-gray-300">Developed location and rewards screens, integrated fuel price syncing, biometric login, and POS data updates.</p>
                      </div>
                      <div className="border-l-4 border-emerald-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">EG CMS Portal</h5>
                        <p className="text-gray-600 dark:text-gray-300">Built internal CMS using Node.js and React with full-stack functionality.</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">EG Website</h5>
                        <p className="text-gray-600 dark:text-gray-300">Maintained and enhanced the company website using WordPress.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Dotsquares Experience */}
              <Card className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Full Stack Developer</h3>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">DS</span>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">Dotsquares Technology</p>
                        <p className="text-gray-600 dark:text-gray-300">January 2022 - June 2024</p>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    2.5 Years
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Projects & Responsibilities:</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">Away Resorts & Community Fiver & Dotsquares</h5>
                        <p className="text-gray-600 dark:text-gray-300">Implemented Yext Search functionality using Jambo and React.js for enhanced user experience.</p>
                      </div>
                      <div className="border-l-4 border-green-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">Coach & Central England</h5>
                        <p className="text-gray-600 dark:text-gray-300">Built location, locator, and DM pages for 5 locales using React.js with responsive design.</p>
                      </div>
                      <div className="border-l-4 border-purple-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">Kate Spade</h5>
                        <p className="text-gray-600 dark:text-gray-300">Created multi-language (7 locales) location and locator pages using React.js.</p>
                      </div>
                      <div className="border-l-4 border-red-600 pl-4">
                        <h5 className="font-medium text-gray-900 dark:text-white">HelpDesk Pro</h5>
                        <p className="text-gray-600 dark:text-gray-300">Built an internal IT support ticket system using ASP.NET Core, with role-based dashboards and email notifications.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Education */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Computer Application</h3>
                    <p className="text-gray-600 dark:text-gray-300">Sandip University • 2018 - 2021</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ready to discuss your next project? Let's connect and explore how I can help bring your ideas to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Contact Information */}
              <Card className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-navy-100 dark:bg-navy-900 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-navy-600 dark:text-navy-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:sonalsingh3498@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-navy-600 dark:hover:text-navy-400 smooth-transition">
                        sonalsingh3498@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+917667063062" className="text-gray-900 dark:text-white font-medium hover:text-emerald-600 dark:hover:text-emerald-400 smooth-transition">
                        +91 7667063062
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                      <span className="text-gray-900 dark:text-white font-medium">
                        Linkedin-Sonal_Singh
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button onClick={handleResumeDownload} className="w-full bg-navy-600 hover:bg-navy-700 text-white">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </div>
              </Card>

              {/* Professional Quote */}
              <div className="bg-gradient-to-br from-navy-600 to-blue-500 rounded-xl p-8 text-white">
                <div className="mb-6">
                  <svg className="w-12 h-12 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-lg italic mb-4">
                  "Sonal consistently demonstrated adaptability across multiple technology stacks, excellent 
                  collaboration with technical and non-technical stakeholders, methodical problem-solving 
                  abilities, and reliability in meeting deadlines while maintaining high code quality standards."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">VK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Vinu Kumar</p>
                    <p className="text-sm opacity-75">CTO, HorizonX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Card className="p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Ready to Work Together?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Let's discuss how I can contribute to your team's success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-navy-600 hover:bg-navy-700">
                    <a href="mailto:sonalsingh3498@gmail.com">Send Email</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+917667063062">Call Now</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-16 smooth-transition">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Sonal Singh. Built with passion for clean code and great user experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
