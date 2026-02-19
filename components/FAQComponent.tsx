import { Colors } from '@/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native';
import { ThemedText } from './themed-text';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  data: FAQItem[];
  theme: any
}

const ExpandableFAQ: React.FC<Props> = ({ data, theme }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {data.map(item => {
        const isExpanded = expandedId === item.id;

        return (
          <View key={item.id} style={styles.card}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.questionContainer}
              onPress={() => toggleExpand(item.id)}
            >
              <ThemedText style={styles.question}>{item.question}</ThemedText>
              <MaterialIcons
                name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={26}
                style={styles.icon}
                color={theme == 'light' ? Colors.light.text : Colors.dark.text} />
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.answerContainer}>
                <ThemedText style={styles.answer}>{item.answer}</ThemedText>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default ExpandableFAQ;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
    paddingVertical: 5,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
  },
  icon: {
    fontWeight: 'bold',
  },
  answerContainer: {
    marginTop: 10,
  },
  answer: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8
  },
});
