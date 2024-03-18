import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CalendarComponent = ({callendarData}) => {
  const [selectedItem, setSelectedItem] = useState(callendarData[0]);
  const [periodSelected, setPeriodSelected] = useState(
    callendarData[0].slots[0],
  );
  const [timeSelected, setTimeSelected] = useState(
    callendarData[0].slots[0].time[0],
  );

  const handleSelect = item => {
    setSelectedItem(item);
  };

  const handlePeriodSelect = item => {
    setPeriodSelected(item);
    // Reset the selected time when a new period is selected
    setTimeSelected(item.time[0]);
  };

  const handleSelectedTime = timeSlot => {
    setTimeSelected(timeSlot);
  };

  return (
    <View>
      <FlatList
        horizontal
        data={callendarData}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          const isSelected = selectedItem && selectedItem.date === item.date;
          return (
            <View>
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: isSelected
                    ? 'rgba(244, 95, 101, 1)'
                    : 'rgba(255, 255, 255, 1)',
                  marginRight: 10,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text
                  style={[
                    styles.text,
                    {
                      color: isSelected
                        ? 'rgba(255, 255, 255, 1)'
                        : 'rgba(26, 29, 31, 1)',
                    },
                  ]}>
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      color: isSelected
                        ? 'rgba(255, 255, 255, 1)'
                        : 'rgba(26, 29, 31, 1)',
                    },
                  ]}>
                  {item.date}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View
        style={{
          height: 42,
          flex: 1,
          backgroundColor: 'rgba(242, 243, 247, 1)',
          borderRadius: 50,
          marginVertical: 10,
          // alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 30,
        }}>
        <FlatList
          data={selectedItem?.slots}
          horizontal
          renderItem={({item: itemSlot}) => {
            const isPeriodSelected =
              periodSelected && periodSelected.period === itemSlot.period;
            return (
              <View
                style={{
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => handlePeriodSelect(itemSlot)}
                  style={[
                    styles.periodText,
                    {
                      backgroundColor: isPeriodSelected
                        ? 'rgba(255, 255, 255, 1)'
                        : 'rgba(242, 243, 247, 1)',
                      color: isPeriodSelected
                        ? 'rgba(244, 95, 101, 1)'
                        : 'rgba(26, 29, 31, 1)',
                    },
                  ]}>
                  {itemSlot.period}
                </Text>
              </View>
            );
          }}
        />
      </View>
      {/* Time slots */}
      <View style={styles.timeSlotsContainer}>
        {periodSelected?.time.map((timeSlot, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSelectedTime(timeSlot)}
            style={[
              styles.timeSlot,
              {
                borderColor:
                  timeSelected === timeSlot
                    ? 'rgba(244, 95, 101, 1)'
                    : 'rgba(130, 130, 130, 1)',
              },
            ]}>
            <Text
              style={[
                styles.timeSlotText,
                {
                  color:
                    timeSelected === timeSlot
                      ? 'rgba(244, 95, 101, 1)'
                      : 'rgba(49, 49, 49, 1)',
                },
              ]}>
              {timeSlot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  periodText: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    // width: '100%',
    borderRadius: 20,
    marginRight: 5,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '4%',
    marginTop: 16,
  },
  timeSlot: {
    height: 38,
    width: 98,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    marginBottom: 16,
  },
  timeSlotText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'rgba(49, 49, 49, 1)',
  },
});
