export default {
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 20,
  },

  productImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  productInfo: {
    flexDirection: "column",
  },
  productName: {
    textAlign: "center",
    maxWidth: 100,
    fontSize: 14,
  },
  productAmount: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
  },

  buttonEdit: {
    textAlign: 'center',
    padding: 15,
  },

  editItem: {
    display: "flex",
    height: 400,
    width: 350,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    left: 20,
    top: 20,
    padding: 10
  },
  itemInfo: {
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 10
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 10,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  editDescription: {
    height: 40,
    margin: 10,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
