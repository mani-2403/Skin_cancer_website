Skin Care & Skin Disease Detection Website
 Project Overview

This project is a web-based Skin Care and Skin Disease Detection system that allows users to upload a skin image and receive an AI-based prediction indicating whether the condition is Normal, Benign, or Malignant.
The system is designed to assist in early awareness and screening, not to replace medical professionals.

The website integrates a deep learning image classification model with a modern web interface for real-time prediction.

 Objectives

To build an AI-powered skin care website using deep learning

To classify skin images into predefined categories

To provide fast and user-friendly prediction results

To demonstrate the application of AI in the healthcare domain

 AI Model Details

Model Type: Convolutional Neural Network (CNN)

Transfer Learning: MobileNetV2

Framework: TensorFlow / Keras

Training Platform: Google Colab

Input Image Size: 224 × 224

Output: Multi-class classification (Softmax)

 Dataset Structure
dataset/
├── train/
│   ├── benign/
│   ├── malignant/
│   └── normal/
└── test/
    ├── benign/
    ├── malignant/
    └── normal/

 Website Features

Image upload for skin analysis

AI-based prediction

Clear result display

Simple and responsive UI

No OTP / No password (direct access)

Suitable for demonstration and academic use

Technologies Used
Frontend

  HTML

  CSS

  JavaScript

Backend

  Python

  Flask (or equivalent backend framework)

# AI / ML

   TensorFlow

   Keras

   NumPy

   OpenCV (optional)

   Deployment

   Vercel (Frontend)

Model served locally or via backend API

! How It Works

User uploads a skin image

Image is preprocessed (resize, normalization)

Image is passed to the trained AI model

Model predicts the class

Result is displayed on the website
