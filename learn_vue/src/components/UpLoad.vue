<template>
  <div class="upload-container">
    <h2>文件上传并转为 Base64</h2>

    <!-- 文件上传组件 -->
    <input type="file" @change="handleFileChange" />

    <!-- 显示文件的 Base64 编码 -->
    <div v-if="base64Data">
      <h3>Base64 编码数据：</h3>
      <textarea v-model="base64Data" rows="6" cols="60" readonly></textarea>
    </div>

    <!-- 如果是图片，可以展示图片预览 -->
    <div v-if="base64Image">
      <h3>图片预览：</h3>
      <img :src="base64Image" alt="文件预览" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Base64 编码结果
const base64Data = ref('')
const base64Image = ref('')

// 处理文件上传
const handleFileChange = (event) => {
  const file = event.target.files[0]
  
  if (file) {
    const reader = new FileReader()

    // 读取文件并转为 Base64
    reader.onload = () => {
      // 获取 Base64 编码
      base64Data.value = reader.result

      // 如果是图片文件，生成预览
      if (file.type.startsWith('image/')) {
        base64Image.value = reader.result
      }
    }

    // 开始读取文件（转为 Base64）
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
.upload-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}
textarea {
  width: 100%;
  font-family: monospace;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
