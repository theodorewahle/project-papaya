import React from 'react';
import { View, Text } from 'react-native';
import Rehive from 'rehive';

const API_TOKEN = 'e2fcc530141326f605ed45afbf84cd000a31689131d921aebba411ede45fb402';
const config = { apiVersion: 3, apiToken: API_TOKEN };
const rehiveAPI = new Rehive(config);

export default rehiveAPI;

// GET ALL USERS
// rehive.admin.users.get()
