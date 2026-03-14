import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

export type DropdownOption = {
  label: string;
  value: string | number;
};

interface CustomDropdownProps {
  options: DropdownOption[];
  selectedValue: string | number | null;
  onSelect: (value: DropdownOption) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  selectedValue,
  onSelect,
  placeholder = 'Select an option',
  containerStyle,
  headerStyle,
  dropdownStyle,
  textStyle,
}) => {
  const [visible, setVisible] = useState(false);
  const theme = useColorScheme() ?? 'light';

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.dropdownHeader,
          // { backgroundColor: Colors[theme].secondaryBtn },
          headerStyle,
        ]}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.headerText, { color: Colors.light.primary }, textStyle]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Ionicons name={visible ? "chevron-up" : "chevron-down"} size={16} color={Colors.light.primary} style={{ marginTop: 2 }} />
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.dropdownBody, { backgroundColor: Colors[theme].secondary }, dropdownStyle]}>
                <FlatList
                  data={options}
                  keyExtractor={(item) => item.value.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.optionItem,
                        { borderBottomColor: Colors[theme].primary + '20' },
                        selectedValue === item.value && { backgroundColor: Colors[theme].primary + '10' }
                      ]}
                      onPress={() => {
                        onSelect(item);
                        setVisible(false);
                      }}
                    >
                      <Text style={[
                        styles.optionText,
                        { color: Colors[theme].text },
                        selectedValue === item.value && { fontWeight: 'bold' }
                      ]}>
                        {item.label}
                      </Text>
                      {selectedValue === item.value && (
                        <Ionicons name="checkmark" size={18} color={Colors.light.primary} />
                      )}
                    </TouchableOpacity>
                  )}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    width: '35%',
    marginVertical: spacingY._10,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: spacingX._15,
    paddingVertical: spacingY._15,
    borderRadius: 12,
  },
  headerText: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  dropdownBody: {
    width: '80%',
    maxHeight: '40%',
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacingX._15,
    paddingVertical: spacingY._15,
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 14,
  },
});
