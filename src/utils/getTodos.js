import axios from 'axios';
import React, { useState } from 'react'

const getTodos = async () => {
  const headers = {
    Authorization: 'Bearer 9|2p44jSSTNQXVjwHdRBBzUCMqZzlAIQmCzDdCrtzh11a8798c'
  };

  try {

    const response = await axios.get('http://127.0.0.1:8000/api/v1/tasks', { headers });

    return response.data;

  } catch (error) {

    console.error('Error fetching todos:', error.message);

    throw error;
  }
};

export default getTodos



