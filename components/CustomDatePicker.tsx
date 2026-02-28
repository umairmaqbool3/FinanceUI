import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

interface Props {
  value: Date;
  onChange: (date: Date) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const CustomDatePicker: React.FC<Props> = ({ value, onChange, visible, setVisible }) => {
  const [tempDate, setTempDate] = useState(value);
  const theme = useColorScheme() ?? 'light';

  const handleChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (Platform.OS === 'android') {
      setVisible(false);
      if (event.type === 'set' && selectedDate) {
        onChange(selectedDate);
      }
    } else {
      if (selectedDate) {
        setTempDate(selectedDate);
      }
    }
  };

  const handleCancel = () => {
    setTempDate(value);
    setVisible(false);
  };

  const handleDone = () => {
    onChange(tempDate);
    setVisible(false);
  };

  return (
    <View style={styles.container}>

      {/* Android */}
      {visible && Platform.OS === 'android' && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}

      {/* iOS Modal */}
      {Platform.OS === 'ios' && (
        <Modal visible={visible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContainer, { backgroundColor: Colors[theme].secondary }]}>
              <View style={styles.header}>
                <TouchableOpacity onPress={handleCancel}>
                  <Text style={[styles.cancelText, { color: Colors[theme].text }]}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleDone}>
                  <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="spinner"
                  onChange={handleChange}
                  style={{ backgroundColor: Colors[theme].secondary }}
                />
              </View>

            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cancelText: {
    fontSize: 16,
  },
  doneText: {
    color: Colors.light.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});