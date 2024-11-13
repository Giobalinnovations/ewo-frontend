'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// internal
import ErrorMsg from '../common/error-msg';
import { notifySuccess, notifyError } from '@/utils/toast';
import { useSubmitContactMutation } from '@/redux/features/contact/contactApi';
import LoadingSpinner from '../common/loading-spinner';

// schema
const schema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  subject: Yup.string().required().label('Subject'),
  message: Yup.string().required().label('Message'),
});

const ContactForm = () => {
  // rtk query mutation
  const [submitContact, { isLoading }] = useSubmitContactMutation();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // on submit
  const onSubmit = async data => {
    try {
      const response = await submitContact(data).unwrap();
      notifySuccess('Message sent successfully!');
      reset();
    } catch (error) {
      notifyError(error?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input
              {...register('name')}
              name="name"
              id="name"
              type="text"
              placeholder="John Doe"
              disabled={isLoading}
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Your Name</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input
              {...register('email')}
              name="email"
              id="email"
              type="email"
              placeholder="john@doe.com"
              disabled={isLoading}
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Your Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input
              {...register('subject')}
              name="subject"
              id="subject"
              type="text"
              placeholder="Write your subject"
              disabled={isLoading}
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="subject">Subject</label>
          </div>
          <ErrorMsg msg={errors.subject?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea
              {...register('message')}
              id="message"
              name="message"
              placeholder="Write your message here..."
              disabled={isLoading}
            />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Your Message</label>
          </div>
          <ErrorMsg msg={errors.message?.message} />
        </div>
      </div>
      <div className="tp-contact-btn">
        <button
          type="submit"
          disabled={isLoading}
          className={`submit-btn ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
