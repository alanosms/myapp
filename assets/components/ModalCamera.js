import React, { useEffect, useRef, useState } from "react";
import Modal from "react-native-modal";
import styles from "./css/styles";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";

const ModalCamera = ({ modalVisible, setModalVisible, handleImage }) => {
  const navigation = useNavigation();
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const ref = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handlePhotoUri = () => {
    setCapturedPhoto(photo.uri);
    handleImage(capturedPhoto);
    setModalVisible(false);
  };

  _takePhoto = async () => {
    const photo = await ref.current.takePictureAsync();
    setCapturedPhoto(photo.uri);
    handleImage(capturedPhoto);
    setModalVisible(false);
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modal}
    >
      <View
        style={{
          ...styles.editItem,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.closeButton}
        >
          <Text>Fechar</Text>
        </TouchableOpacity>
        <View>
          <>
            <View style={styles.containerModal}></View>

            <Camera style={styles.camera} type={type} ref={ref}></Camera>
            <TouchableOpacity onPress={_takePhoto}>
              <Text style={{ textAlign: "center", padding: 30 }}>
                Snap Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
            ></TouchableOpacity>
          </>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={{ marginRight: 50 }}
          >
            <Text>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCamera;
