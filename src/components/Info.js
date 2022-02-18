import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Info(props) {
    const { characterId, closeInfo } = props;
    const [info, setInfo] = useState(null);
}