

exports.homePage = (req,res,next)=>{

	res.status(200).render('jobPress/index')
}


exports.helpPage = (req,res,next)=>{

	res.status(200).render('jobPress/help')
}



exports.jobDetails = (req,res,next)=>{

	res.status(200).render('jobPress/job-details')
}


exports.jobListing = (req,res,next)=>{

	res.status(200).render('jobPress/jobs-listing')
}

exports.postJobForm = (req,res,next)=>{

	res.status(200).render('jobPress/post-job-form')
}

exports.pricePlan = (req,res,next)=>{

	res.status(200).render('jobPress/pricing-plans')
}


exports.jobResumeForm = (req,res,next)=>{

	res.status(200).render('jobPress/post-resume-form')
}


exports.about = (req,res,next)=>{

	res.status(200).render('jobPress/about')
}


exports.blogGrid = (req,res,next)=>{

	res.status(200).render('jobPress/blog-grid-full-width')
}


exports.blogList = (req,res,next)=>{

	res.status(200).render('jobPress/blog-list')
}

exports.blogMasonry = (req,res,next)=>{

	res.status(200).render('jobPress/blog-masonary-full-width')
}


exports.blogSingleImage = (req,res,next)=>{

	res.status(200).render('jobPress/blog-single-fullwidth-image')
}

exports.blogSingleVideo = (req,res,next)=>{

	res.status(200).render('jobPress/pricing-plans')
}


exports.blogSingleSidebar = (req,res,next)=>{

	res.status(200).render('jobPress/blog-single-with-sidebar')
}


exports.blogStandard = (req,res,next)=>{

	res.status(200).render('jobPress/blog-standard')
}


exports.candidateDashboard = (req,res,next)=>{

	res.status(200).render('jobPress/candidate-dashboard')
}


exports.candidateListing = (req,res,next)=>{

	res.status(200).render('jobPress/candidates-listing')
}


exports.categories = (req,res,next)=>{

	res.status(200).render('jobPress/categories')
}

exports.companiesListing = (req,res,next)=>{

	res.status(200).render('jobPress/companies-listing')
}

exports.contactUs = (req,res,next)=>{

	res.status(200).render('jobPress/contact-us-full-width')
}

exports.employerDashboard = (req,res,next)=>{

	res.status(200).render('jobPress/employer-dashboard')
}