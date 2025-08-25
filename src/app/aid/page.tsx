"use client"

import PageHeader from '@/components/PageHeader';
import { useState, useRef } from 'react';

export default function Aid() {
  const [childPhotos, setChildPhotos] = useState<File[]>([]);
  const [bills, setBills] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const childPhotosRef = useRef<HTMLInputElement>(null);
  const billsRef = useRef<HTMLInputElement>(null);

  // Error display component
  const ErrorMessage = ({ field }: { field: string }) => {
    return errors[field] ? (
      <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
    ) : null;
  };

  const totalSteps = 7;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps && validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      setErrors({}); // Clear errors when moving to next step
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({}); // Clear errors when moving to previous step
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1: // Child Information
        if (!formData.childName?.trim()) {
          newErrors.childName = 'Child\'s name is required';
        }
        if (!formData.childDOB) {
          newErrors.childDOB = 'Child\'s date of birth is required';
        }
        if (!formData.diagnosisDate) {
          newErrors.diagnosisDate = 'Diagnosis date is required';
        }
        if (!formData.cancerType?.trim()) {
          newErrors.cancerType = 'Cancer type is required';
        }
        if (!formData.treatmentStatus) {
          newErrors.treatmentStatus = 'Treatment status is required';
        }
        break;

      case 2: // Parent Information
        if (!formData.parentName?.trim()) {
          newErrors.parentName = 'Parent\'s name is required';
        }
        if (!formData.parentPhone?.trim()) {
          newErrors.parentPhone = 'Phone number is required';
        } else if (!validatePhone(formData.parentPhone)) {
          newErrors.parentPhone = 'Please enter a valid phone number';
        }
        if (!formData.parentEmail?.trim()) {
          newErrors.parentEmail = 'Email address is required';
        } else if (!validateEmail(formData.parentEmail)) {
          newErrors.parentEmail = 'Please enter a valid email address';
        }
        if (!formData.parentEmailConfirm?.trim()) {
          newErrors.parentEmailConfirm = 'Please confirm your email address';
        } else if (formData.parentEmail !== formData.parentEmailConfirm) {
          newErrors.parentEmailConfirm = 'Email addresses do not match';
        }
        if (!formData.address?.trim()) {
          newErrors.address = 'Address is required';
        }
        if (!formData.city?.trim()) {
          newErrors.city = 'City is required';
        }
        if (!formData.state?.trim()) {
          newErrors.state = 'State/Province is required';
        }
        if (!formData.zipCode?.trim()) {
          newErrors.zipCode = 'ZIP/Postal code is required';
        }
        if (!formData.country?.trim()) {
          newErrors.country = 'Country is required';
        }
        break;

      case 3: // Hospital Information
        if (!formData.hospitalName?.trim()) {
          newErrors.hospitalName = 'Hospital name is required';
        }
        if (!formData.hospitalAddress?.trim()) {
          newErrors.hospitalAddress = 'Hospital address is required';
        }
        if (!formData.hospitalCity?.trim()) {
          newErrors.hospitalCity = 'Hospital city is required';
        }
        if (!formData.hospitalState?.trim()) {
          newErrors.hospitalState = 'Hospital state/province is required';
        }
        if (!formData.hospitalZipCode?.trim()) {
          newErrors.hospitalZipCode = 'Hospital ZIP/postal code is required';
        }
        if (!formData.hospitalCountry?.trim()) {
          newErrors.hospitalCountry = 'Hospital country is required';
        }
        if (!formData.socialWorkerName?.trim()) {
          newErrors.socialWorkerName = 'Social worker name is required';
        }
        if (!formData.socialWorkerPhone?.trim()) {
          newErrors.socialWorkerPhone = 'Social worker phone is required';
        } else if (!validatePhone(formData.socialWorkerPhone)) {
          newErrors.socialWorkerPhone = 'Please enter a valid phone number';
        }
        if (!formData.socialWorkerEmail?.trim()) {
          newErrors.socialWorkerEmail = 'Social worker email is required';
        } else if (!validateEmail(formData.socialWorkerEmail)) {
          newErrors.socialWorkerEmail = 'Please enter a valid email address';
        }
        if (!formData.socialWorkerEmailConfirm?.trim()) {
          newErrors.socialWorkerEmailConfirm = 'Please confirm social worker email';
        } else if (formData.socialWorkerEmail !== formData.socialWorkerEmailConfirm) {
          newErrors.socialWorkerEmailConfirm = 'Email addresses do not match';
        }
        break;

      case 4: // Child's Story
        if (!formData.childStory?.trim()) {
          newErrors.childStory = 'Child\'s story is required';
        } else if (formData.childStory.length < 300) {
          newErrors.childStory = `Story must be at least 300 characters (currently ${formData.childStory.length})`;
        }
        break;

      case 5: // File Uploads
        if (childPhotos.length < 6) {
          newErrors.childPhotos = `Please upload at least 6 photos (currently ${childPhotos.length})`;
        }
        if (bills.length < 1) {
          newErrors.bills = 'Please upload at least 1 bill';
        }
        break;

      case 7: // Review & Signature
        if (!formData.signature?.trim()) {
          newErrors.signature = 'Signature is required';
        }
        if (!formData.signatureDate?.trim()) {
          newErrors.signatureDate = 'Date is required';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const canProceedToNext = () => {
    return validateStep(currentStep);
  };

  const handleFileUpload = (files: FileList | null, type: 'childPhotos' | 'bills') => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    console.log(`Adding ${fileArray.length} files to ${type}:`, fileArray.map(f => ({ name: f.name, type: f.type, size: f.size })));
    
    if (type === 'childPhotos') {
      setChildPhotos(prev => [...prev, ...fileArray]);
    } else {
      setBills(prev => [...prev, ...fileArray]);
    }
  };

  const removeFile = (index: number, type: 'childPhotos' | 'bills') => {
    if (type === 'childPhotos') {
      setChildPhotos(prev => prev.filter((_, i) => i !== index));
    } else {
      setBills(prev => prev.filter((_, i) => i !== index));
    }
  };

  const clearFileInput = (type: 'childPhotos' | 'bills') => {
    if (type === 'childPhotos' && childPhotosRef.current) {
      childPhotosRef.current.value = '';
    } else if (type === 'bills' && billsRef.current) {
      billsRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Apply For Aid"
        subtitle="We can help with emergency medical expenses during your child's cancer treatment, such as medical bills, transportation, lodging, food, and more."
      />

      {/* About Our Aid Program */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-violet-700 mb-8 text-center">Family Assistance Program</h2>
            
            <div className="prose prose-lg max-w-none text-violet-700">
              <p className="text-xl leading-relaxed mb-8">
                When a child is diagnosed with cancer, families face not only emotional challenges but also 
                significant financial burdens. Our Family Assistance Program is here to help.
              </p>

              <p className="mb-6">
                We understand that medical bills, transportation costs, lodging, and other expenses can 
                quickly become overwhelming. Our goal is to provide financial relief so families can focus 
                on what matters most - their child's recovery.
              </p>

              <div className="bg-orange-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">What We Cover</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Medical bills and treatment costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Transportation to and from treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Lodging near treatment centers
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Food and basic necessities
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Childcare for siblings
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Other essential expenses
                  </li>
                </ul>
              </div>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Eligibility</h3>
                <p className="text-violet-600 mb-4">
                  To be eligible for assistance, families must:
                </p>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Have a child under 18 diagnosed with cancer
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Demonstrate financial need
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Be receiving treatment at an accredited medical facility
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Complete the application process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Apply</h3>
              <p className="text-violet-600">
                Complete the online application form with your family's information and needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-saffron-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Review</h3>
              <p className="text-violet-600">
                Our team reviews your application and may request additional documentation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Approval</h3>
              <p className="text-violet-600">
                Once approved, we work with you to determine the best way to provide assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Support</h3>
              <p className="text-violet-600">
                We provide ongoing support and may offer additional assistance as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Apply for Financial Assistance</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-violet-900">
            <p className="text-lg text-violet-700 mb-8 text-center">
              Please complete this form to apply for financial assistance. All information will be kept confidential.
            </p>

            {/* Step Indicator */}
            <div className="mb-8">
              {/* Desktop Step Indicator */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between">
                  {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                        step < currentStep 
                          ? 'bg-green-500 text-white shadow-md' 
                          : step === currentStep 
                          ? 'bg-orange-500 text-white shadow-lg scale-110' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {step < currentStep ? '✓' : step}
                      </div>
                      {step < 7 && (
                        <div className={`w-16 h-1 mx-2 transition-all duration-200 ${
                          step < currentStep ? 'bg-green-500' : 'bg-gray-300'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span className="w-10 text-center">Child Info</span>
                  <span className="w-10 text-center">Parent Info</span>
                  <span className="w-10 text-center">Hospital</span>
                  <span className="w-10 text-center">Story</span>
                  <span className="w-10 text-center">Files</span>
                  <span className="w-10 text-center">Links</span>
                  <span className="w-10 text-center">Review</span>
                </div>
              </div>

              {/* Mobile Step Indicator */}
              <div className="md:hidden">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto transition-all duration-200 ${
                      currentStep === 1 
                        ? 'bg-orange-500 text-white shadow-lg scale-110' 
                        : 'bg-green-500 text-white shadow-md'
                    }`}>
                      {currentStep}
                    </div>
                    <div className="mt-2 text-sm font-medium text-violet-700">
                      {currentStep === 1 && 'Child Information'}
                      {currentStep === 2 && 'Parent Information'}
                      {currentStep === 3 && 'Hospital Information'}
                      {currentStep === 4 && 'Child\'s Story'}
                      {currentStep === 5 && 'File Uploads'}
                      {currentStep === 6 && 'Additional Links'}
                      {currentStep === 7 && 'Review & Signature'}
                    </div>
                  </div>
                </div>
                
                {/* Mobile Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-orange-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / 7) * 100}%` }}
                  ></div>
                </div>
                
                {/* Mobile Step Dots */}
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        step < currentStep 
                          ? 'bg-green-500' 
                          : step === currentStep 
                          ? 'bg-orange-500 scale-125' 
                          : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
                
                <div className="text-center mt-2 text-xs text-gray-600">
                  Step {currentStep} of 7
                </div>
              </div>
            </div>

                        <form className="space-y-6" method="post" action="/api/submit" encType="multipart/form-data" onSubmit={(e) => {
              e.preventDefault();
              
              // Prevent multiple submissions
              if (isSubmitting) return;
              
              setIsSubmitting(true);
              
              // Create new FormData with all form fields from state
              const formDataToSubmit = new FormData();
              
              // Add form type and page path
              formDataToSubmit.append('formType', 'aid_application');
              formDataToSubmit.append('pagePath', '/aid');
              
              // Add all form data from state
              Object.keys(formData).forEach(key => {
                if (formData[key] !== undefined && formData[key] !== null && formData[key] !== '') {
                  formDataToSubmit.append(key, formData[key]);
                }
              });
              
              // Add child photos
              childPhotos.forEach(file => {
                formDataToSubmit.append('childPhotos', file);
              });
              
              // Add bills
              bills.forEach(file => {
                formDataToSubmit.append('bills', file);
              });
              
              console.log('Submitting form with files:', {
                childPhotos: childPhotos.length,
                bills: bills.length
              });
              
              // Submit the form with files
              fetch('/api/submit', {
                method: 'POST',
                body: formDataToSubmit
              }).then(response => {
                console.log('Form submission response:', response.status);
                if (response.ok) {
                  window.location.href = '/aid?submitted=1';
                } else {
                  window.location.href = '/aid?submitted=0';
                }
              }).catch((error) => {
                console.error('Form submission error:', error);
                window.location.href = '/aid?submitted=0';
              }).finally(() => {
                setIsSubmitting(false);
              });
            }}>
              <input type="hidden" name="formType" value="aid_application" />
              <input type="hidden" name="pagePath" value="/aid" />
              
              {/* Step 1: Child Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 1: Child Information</h3>
                  
                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {Object.values(errors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-violet-700 mb-2">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName || ''}
                        onChange={(e) => updateFormData('childName', e.target.value)}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent ${
                          errors.childName ? 'border-red-500' : 'border-violet-300'
                        }`}
                      />
                      <ErrorMessage field="childName" />
                    </div>
                    <div>
                      <label htmlFor="childDOB" className="block text-sm font-medium text-violet-700 mb-2">
                        Child's Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="childDOB"
                        name="childDOB"
                        value={formData.childDOB || ''}
                        onChange={(e) => updateFormData('childDOB', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="childGender" className="block text-sm font-medium text-violet-700 mb-2">
                        Child's Gender
                      </label>
                      <select
                        id="childGender"
                        name="childGender"
                        value={formData.childGender || ''}
                        onChange={(e) => updateFormData('childGender', e.target.value)}
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="diagnosisDate" className="block text-sm font-medium text-violet-700 mb-2">
                        Child's Date of Diagnosis *
                      </label>
                      <input
                        type="date"
                        id="diagnosisDate"
                        name="diagnosisDate"
                        value={formData.diagnosisDate || ''}
                        onChange={(e) => updateFormData('diagnosisDate', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cancerType" className="block text-sm font-medium text-violet-700 mb-2">
                        Child's Type of Cancer / Illness *
                      </label>
                      <input
                        type="text"
                        id="cancerType"
                        name="cancerType"
                        value={formData.cancerType || ''}
                        onChange={(e) => updateFormData('cancerType', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="treatmentStatus" className="block text-sm font-medium text-violet-700 mb-2">
                        Treatment Status *
                      </label>
                      <select
                        id="treatmentStatus"
                        name="treatmentStatus"
                        value={formData.treatmentStatus || ''}
                        onChange={(e) => updateFormData('treatmentStatus', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      >
                        <option value="">Select status</option>
                        <option value="in-treatment">In Treatment</option>
                        <option value="relapse">Relapse</option>
                        <option value="remission">Remission</option>
                        <option value="angel">Angel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Parent Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 2: Parent/Legal Guardian Information</h3>
                  
                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {Object.values(errors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-medium text-violet-700 mb-2">
                        Parent/Legal Guardian's Name *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName || ''}
                        onChange={(e) => updateFormData('parentName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-medium text-violet-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        value={formData.parentPhone || ''}
                        onChange={(e) => updateFormData('parentPhone', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-medium text-violet-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="parentEmail"
                        name="parentEmail"
                        value={formData.parentEmail || ''}
                        onChange={(e) => updateFormData('parentEmail', e.target.value)}
                        required
                        placeholder="E.g. john@doe.com"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentEmailConfirm" className="block text-sm font-medium text-violet-700 mb-2">
                        Confirm Email Address *
                      </label>
                      <input
                        type="email"
                        id="parentEmailConfirm"
                        name="parentEmailConfirm"
                        value={formData.parentEmailConfirm || ''}
                        onChange={(e) => updateFormData('parentEmailConfirm', e.target.value)}
                        required
                        placeholder="Re-type Email Address"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Address Fields */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-violet-700 mb-2">
                      Parent/Legal Guardian's Permanent Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address || ''}
                      onChange={(e) => updateFormData('address', e.target.value)}
                      required
                      placeholder="E.g. 42 Wallaby Way"
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent mb-3"
                    />
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      value={formData.address2 || ''}
                      onChange={(e) => updateFormData('address2', e.target.value)}
                      placeholder="Apartment, suite, etc"
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent mb-3"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city || ''}
                        onChange={(e) => updateFormData('city', e.target.value)}
                        required
                        placeholder="City"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state || ''}
                        onChange={(e) => updateFormData('state', e.target.value)}
                        required
                        placeholder="State/Province"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode || ''}
                        onChange={(e) => updateFormData('zipCode', e.target.value)}
                        required
                        placeholder="ZIP/Postal Code"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country || ''}
                        onChange={(e) => updateFormData('country', e.target.value)}
                        required
                        placeholder="Country"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Hospital Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 3: Hospital Information</h3>
                  
                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {Object.values(errors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="hospitalName" className="block text-sm font-medium text-violet-700 mb-2">
                        Affiliated Hospital's Name *
                      </label>
                      <input
                        type="text"
                        id="hospitalName"
                        name="hospitalName"
                        value={formData.hospitalName || ''}
                        onChange={(e) => updateFormData('hospitalName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Hospital Address */}
                  <div>
                    <label htmlFor="hospitalAddress" className="block text-sm font-medium text-violet-700 mb-2">
                      Affiliated Hospital's Address *
                    </label>
                    <input
                      type="text"
                      id="hospitalAddress"
                      name="hospitalAddress"
                      value={formData.hospitalAddress || ''}
                      onChange={(e) => updateFormData('hospitalAddress', e.target.value)}
                      required
                      placeholder="E.g. 42 Wallaby Way"
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent mb-3"
                    />
                    <input
                      type="text"
                      id="hospitalAddress2"
                      name="hospitalAddress2"
                      value={formData.hospitalAddress2 || ''}
                      onChange={(e) => updateFormData('hospitalAddress2', e.target.value)}
                      placeholder="Apartment, suite, etc"
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent mb-3"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <input
                        type="text"
                        id="hospitalCity"
                        name="hospitalCity"
                        value={formData.hospitalCity || ''}
                        onChange={(e) => updateFormData('hospitalCity', e.target.value)}
                        required
                        placeholder="City"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        id="hospitalState"
                        name="hospitalState"
                        value={formData.hospitalState || ''}
                        onChange={(e) => updateFormData('hospitalState', e.target.value)}
                        required
                        placeholder="State/Province"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        id="hospitalZipCode"
                        name="hospitalZipCode"
                        value={formData.hospitalZipCode || ''}
                        onChange={(e) => updateFormData('hospitalZipCode', e.target.value)}
                        required
                        placeholder="ZIP/Postal Code"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                      <input
                        type="text"
                        id="hospitalCountry"
                        name="hospitalCountry"
                        value={formData.hospitalCountry || ''}
                        onChange={(e) => updateFormData('hospitalCountry', e.target.value)}
                        required
                        placeholder="Country"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Social Worker Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="socialWorkerName" className="block text-sm font-medium text-violet-700 mb-2">
                        Social Worker/Hospital Contact's Name *
                      </label>
                      <input
                        type="text"
                        id="socialWorkerName"
                        name="socialWorkerName"
                        value={formData.socialWorkerName || ''}
                        onChange={(e) => updateFormData('socialWorkerName', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="socialWorkerPhone" className="block text-sm font-medium text-violet-700 mb-2">
                        Social Worker/Hospital Contact's Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="socialWorkerPhone"
                        name="socialWorkerPhone"
                        value={formData.socialWorkerPhone || ''}
                        onChange={(e) => updateFormData('socialWorkerPhone', e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="socialWorkerEmail" className="block text-sm font-medium text-violet-700 mb-2">
                        Social Worker/Hospital Contact's Email *
                      </label>
                      <input
                        type="email"
                        id="socialWorkerEmail"
                        name="socialWorkerEmail"
                        value={formData.socialWorkerEmail || ''}
                        onChange={(e) => updateFormData('socialWorkerEmail', e.target.value)}
                        required
                        placeholder="E.g. john@doe.com"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="socialWorkerEmailConfirm" className="block text-sm font-medium text-violet-700 mb-2">
                        Confirm Email Address *
                      </label>
                      <input
                        type="email"
                        id="socialWorkerEmailConfirm"
                        name="socialWorkerEmailConfirm"
                        value={formData.socialWorkerEmailConfirm || ''}
                        onChange={(e) => updateFormData('socialWorkerEmailConfirm', e.target.value)}
                        required
                        placeholder="Re-type Email Address"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Child's Story */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 4: Child's Story</h3>
                  
                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {Object.values(errors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="childStory" className="block text-sm font-medium text-violet-700 mb-2">
                      Please write your child's story in details [Minimum 300 words required for full review] *
                    </label>
                                         <textarea
                       id="childStory"
                       name="childStory"
                       rows={8}
                       value={formData.childStory || ''}
                       onChange={(e) => updateFormData('childStory', e.target.value)}
                       required
                       minLength={300}
                       placeholder="Please describe how your child was diagnosed and the challenges your family has faced during this time. What differentiates your child from other children? What does your child enjoy doing? What are your child's wishes or dreams? What would make your child happy? Is there anything else you would like to share that was not asked here?"
                       className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent ${
                         errors.childStory ? 'border-red-500' : 'border-violet-300'
                       }`}
                     ></textarea>
                     <p className="text-sm text-violet-600 mt-2">Minimum 300 words required for full review</p>
                     <ErrorMessage field="childStory" />
                  </div>
                </div>
              )}

              {/* Step 5: File Uploads */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 5: File Uploads</h3>
                  
                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {Object.values(errors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <label htmlFor="childPhotos" className="block text-sm font-medium text-violet-700 mb-2">
                      Please upload your child's photos [Minimum 6 photos required for full review] *
                    </label>
                    <div className="border-2 border-dashed border-violet-300 rounded-lg p-6 text-center">
                      <input
                        ref={childPhotosRef}
                        type="file"
                        id="childPhotos"
                        name="childPhotos"
                        multiple
                        accept="image/*"
                        onChange={(e) => {
                          handleFileUpload(e.target.files, 'childPhotos');
                          clearFileInput('childPhotos');
                        }}
                        className="hidden"
                      />
                      <label htmlFor="childPhotos" className="cursor-pointer">
                        <div className="text-violet-600">
                          <svg className="mx-auto h-12 w-12 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-lg">Drag and Drop (or) Choose Files</p>
                          <p className="text-sm mt-2">(one of the photos should be before the child was diagnosed, 4 during the child's treatment, 1 after if applicable)</p>
                        </div>
                      </label>
                    </div>
                    
                    {/* Child Photos Preview */}
                    {childPhotos.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-violet-700 mb-3">Uploaded Photos ({childPhotos.length})</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {childPhotos.map((file, index) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={`Photo ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index, 'childPhotos')}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                              >
                                ×
                              </button>
                              <p className="text-xs text-gray-600 mt-1 truncate">{file.name}</p>
                            </div>
                          ))}
                        </div>
                        {childPhotos.length < 6 && (
                          <p className="text-sm text-orange-600 mt-2">
                            ⚠️ Minimum 6 photos required. You have {childPhotos.length} of 6.
                          </p>
                        )}
                        <ErrorMessage field="childPhotos" />
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="bills" className="block text-sm font-medium text-violet-700 mb-2">
                      Upload up to 3 bills *
                    </label>
                    <div className="border-2 border-dashed border-violet-300 rounded-lg p-6 text-center">
                      <input
                        ref={billsRef}
                        type="file"
                        id="bills"
                        name="bills"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => {
                          handleFileUpload(e.target.files, 'bills');
                          clearFileInput('bills');
                        }}
                        className="hidden"
                      />
                      <label htmlFor="bills" className="cursor-pointer">
                        <div className="text-violet-600">
                          <svg className="mx-auto h-12 w-12 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-lg">Drag and Drop (or) Choose Files</p>
                          <p className="text-sm mt-2">(for example hospital bill to be paid)</p>
                        </div>
                      </label>
                    </div>
                    
                    {/* Bills Preview */}
                    {bills.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-violet-700 mb-3">Uploaded Bills ({bills.length})</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {bills.map((file, index) => (
                            <div key={index} className="relative group border border-gray-200 rounded-lg p-3">
                              <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  {file.type === 'application/pdf' ? (
                                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                  ) : (
                                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                                  <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index, 'bills')}
                                  className="flex-shrink-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                                >
                                  ×
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        {bills.length > 3 && (
                          <p className="text-sm text-orange-600 mt-2">
                            ⚠️ Maximum 3 bills allowed. You have {bills.length} files.
                          </p>
                        )}
                        <ErrorMessage field="bills" />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 6: Additional Links */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 6: Additional Links</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fundraisingPage" className="block text-sm font-medium text-violet-700 mb-2">
                        If you have a fundraising page for your child, please provide the link.
                      </label>
                      <input
                        type="url"
                        id="fundraisingPage"
                        name="fundraisingPage"
                        value={formData.fundraisingPage || ''}
                        onChange={(e) => updateFormData('fundraisingPage', e.target.value)}
                        placeholder="https://..."
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="socialMediaPages" className="block text-sm font-medium text-violet-700 mb-2">
                        If your child has social media pages (Instagram/Facebook etc) please provide the link.
                      </label>
                      <input
                        type="url"
                        id="socialMediaPages"
                        name="socialMediaPages"
                        value={formData.socialMediaPages || ''}
                        onChange={(e) => updateFormData('socialMediaPages', e.target.value)}
                        placeholder="https://..."
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Review & Signature */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-violet-700 mb-6">Step 7: Review & Signature</h3>
                  
                  {/* Validation Summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        {Object.values(errors).map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Review Section */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-violet-700 mb-4 text-lg">Review Your Application</h4>
                    
                    {/* Child Information Review */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-violet-700 mb-2">Child Information</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Name:</strong> {formData.childName || 'Not provided'}</div>
                        <div><strong>Date of Birth:</strong> {formData.childDOB || 'Not provided'}</div>
                        <div><strong>Gender:</strong> {formData.childGender || 'Not provided'}</div>
                        <div><strong>Diagnosis Date:</strong> {formData.diagnosisDate || 'Not provided'}</div>
                        <div><strong>Cancer Type:</strong> {formData.cancerType || 'Not provided'}</div>
                        <div><strong>Treatment Status:</strong> {formData.treatmentStatus || 'Not provided'}</div>
                      </div>
                    </div>

                    {/* Parent Information Review */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-violet-700 mb-2">Parent/Legal Guardian Information</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Name:</strong> {formData.parentName || 'Not provided'}</div>
                        <div><strong>Phone:</strong> {formData.parentPhone || 'Not provided'}</div>
                        <div><strong>Email:</strong> {formData.parentEmail || 'Not provided'}</div>
                        <div><strong>Address:</strong> {formData.address || 'Not provided'}</div>
                        <div><strong>City:</strong> {formData.city || 'Not provided'}</div>
                        <div><strong>State:</strong> {formData.state || 'Not provided'}</div>
                        <div><strong>ZIP Code:</strong> {formData.zipCode || 'Not provided'}</div>
                        <div><strong>Country:</strong> {formData.country || 'Not provided'}</div>
                      </div>
                    </div>

                    {/* Hospital Information Review */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-violet-700 mb-2">Hospital Information</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Hospital Name:</strong> {formData.hospitalName || 'Not provided'}</div>
                        <div><strong>Hospital Address:</strong> {formData.hospitalAddress || 'Not provided'}</div>
                        <div><strong>Social Worker Name:</strong> {formData.socialWorkerName || 'Not provided'}</div>
                        <div><strong>Social Worker Phone:</strong> {formData.socialWorkerPhone || 'Not provided'}</div>
                        <div><strong>Social Worker Email:</strong> {formData.socialWorkerEmail || 'Not provided'}</div>
                      </div>
                    </div>

                    {/* Child's Story Review */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-violet-700 mb-2">Child's Story</h5>
                      <div className="text-sm">
                        <div><strong>Story Length:</strong> {formData.childStory ? `${formData.childStory.length} characters` : 'Not provided'}</div>
                        <div className="mt-2"><strong>Preview:</strong></div>
                        <div className="bg-white p-3 rounded border text-gray-700 max-h-32 overflow-y-auto">
                          {formData.childStory ? (formData.childStory.length > 200 ? `${formData.childStory.substring(0, 200)}...` : formData.childStory) : 'Not provided'}
                        </div>
                      </div>
                    </div>

                    {/* File Uploads Review */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-violet-700 mb-2">File Uploads</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div><strong>Photos Uploaded:</strong> {childPhotos.length} of 6 required</div>
                        <div><strong>Bills Uploaded:</strong> {bills.length} of 1+ required</div>
                      </div>
                      {childPhotos.length > 0 && (
                        <div className="mt-2">
                          <strong>Photos:</strong>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {childPhotos.map((file, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {file.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {bills.length > 0 && (
                        <div className="mt-2">
                          <strong>Bills:</strong>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {bills.map((file, index) => (
                              <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                {file.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Additional Links Review */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-violet-700 mb-2">Additional Links</h5>
                      <div className="grid grid-cols-1 gap-4 text-sm">
                        <div><strong>Fundraising Page:</strong> {formData.fundraisingPage || 'Not provided'}</div>
                        <div><strong>Social Media Pages:</strong> {formData.socialMediaPages || 'Not provided'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-orange-50 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-violet-700 mb-3">Disclaimer *</h4>
                    <p className="text-sm text-violet-600 leading-relaxed">
                      By signing this application, you are agreeing to allow publication of your child's name and medical condition by Koenig Childhood Cancer Foundation. Additionally, by signing this, you are giving your medical professionals and KCCF permission to share medical information about your child's case. Finally, by signing this, you are consenting to allow KCCF to share your application with other organizations in an effort to, potentially, gain additional funds for you.
                    </p>
                  </div>

                  {/* Signature Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="signature" className="block text-sm font-medium text-violet-700 mb-2">
                        Parent/Legal Guardian Signature *
                      </label>
                      <input
                        type="text"
                        id="signature"
                        name="signature"
                        value={formData.signature || ''}
                        onChange={(e) => updateFormData('signature', e.target.value)}
                        required
                        placeholder="Type your full name as signature"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="signatureDate" className="block text-sm font-medium text-violet-700 mb-2">
                        Name and Date *
                      </label>
                      <input
                        type="text"
                        id="signatureDate"
                        name="signatureDate"
                        value={formData.signatureDate || ''}
                        onChange={(e) => updateFormData('signatureDate', e.target.value)}
                        required
                        placeholder="Your name and today's date"
                        className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
              

              {/* Step Navigation */}
              <div className="flex flex-col sm:flex-row justify-between pt-6 mb-6 gap-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors cursor-pointer w-full sm:w-auto order-2 sm:order-1"
                  >
                    ← Previous Step
                  </button>
                )}
                {currentStep < totalSteps && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors cursor-pointer w-full sm:w-auto order-1 sm:order-2"
                  >
                    Next Step →
                  </button>
                )}
              </div>

              {/* Submit Button - Only show on step 7 */}
              {currentStep === 7 && (
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={childPhotos.length < 6 || bills.length === 0 || isSubmitting || !formData.signature || !formData.signatureDate}
                    className={`px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center mx-auto ${
                      childPhotos.length < 6 || bills.length === 0 || isSubmitting || !formData.signature || !formData.signatureDate
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        : 'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading Files...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                  {(childPhotos.length < 6 || bills.length === 0) && !isSubmitting && (
                    <p className="text-sm text-red-600 mt-2">
                      Please upload at least 6 photos and at least 1 bill to submit your application.
                    </p>
                  )}
                  {(!formData.signature || !formData.signatureDate) && !isSubmitting && (
                    <p className="text-sm text-red-600 mt-2">
                      Please provide your signature and date to submit your application.
                    </p>
                  )}
                  {isSubmitting && (
                    <p className="text-sm text-orange-600 mt-2">
                      Please wait while we upload your files and submit your application...
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-6">Need Immediate Help?</h2>
          <p className="text-lg text-violet-600 mb-8">
            If you need immediate assistance, please call us directly at 
            <span className="font-semibold text-orange-600"> +1 (917) 765-6272</span> or email us at 
            <span className="font-semibold text-orange-600"> join@thekccf.org</span> with "URGENT" in the subject line.
          </p>
          <p className="text-violet-600">
            We strive to respond to all urgent requests within 24 hours.
          </p>
        </div>
      </section>
    </div>
  )
}
