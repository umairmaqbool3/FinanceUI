import React from 'react';
import { View } from 'react-native';

const Space = ({ height, width }: any) => {
    return <View style={{ height: height || 0, width: width || 0 }} />;
};

export default Space;
