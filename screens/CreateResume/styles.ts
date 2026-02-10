import { StyleSheet } from 'react-native';

export const COLORS = {
    primary: '#10B981',
    white: '#FFFFFF',
    lightGray: '#F9FAFB',
    gray: '#F3F4F6',
    borderGray: '#E5E7EB',
    text: '#111827',
    textSecondary: '#6B7280',
};

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray,
    },

    header: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderGray,
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },

    screenPadding: {
        padding: 16,
        paddingBottom: 30,
    },

    input: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.borderGray,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        color: COLORS.text,
        marginBottom: 12,
    },

    textarea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20,
    },

    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },

    listCard: {
        backgroundColor: COLORS.white,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.borderGray,
        marginBottom: 10,
    },

    listTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.text,
    },

    listSub: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginTop: 4,
    },


    // container: {
    //     padding: 16,
    //     backgroundColor: COLORS.white,
    // },

    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 16,
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 12,
        color: COLORS.text,
    },

    card: {
        backgroundColor: COLORS.lightGray,
        padding: 14,
        borderRadius: 10,
        marginBottom: 16,
    },

    // input: {
    //     borderWidth: 1,
    //     borderColor: '#D1D5DB',
    //     backgroundColor: COLORS.white,
    //     borderRadius: 8,
    //     paddingHorizontal: 12,
    //     paddingVertical: 10,
    //     marginBottom: 10,
    //     fontSize: 15,
    // },

    textArea: {
        minHeight: 80,
        textAlignVertical: 'top',
    },

    addBtns: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 40,
    },

    // removeBtn: {
    //     backgroundColor: '#EF4444',
    //     paddingVertical: 5,
    //     borderRadius: 8,
    //     paddingHorizontal: 8,
    //     alignItems: 'center',
    // },

    btnText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 15,
    },
    actionRow: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 12, // RN 0.71+ (remove if older)
  marginTop: 10,
},

addBtn: {
  width: 36,
  height: 36,
  borderRadius: 18,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ECFDF5', // light green
  borderWidth: 1,
  borderColor: '#10B981',
},

removeBtn: {
  width: 36,
  height: 36,
  borderRadius: 18,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FEF2F2', // light red
  borderWidth: 1,
  borderColor: '#EF4444',
},

disabledBtn: {
  opacity: 0.5,
},


row: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
},


listWrap: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 8,
},

chip: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#e2e2e4',
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 16,
  marginRight: 8,
  marginBottom: 8,
},

chipText: {
  marginRight: 6,
  fontSize: 14,
},




});
