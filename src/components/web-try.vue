<template>
  <div class="bg" id="tryItNow">
    <div class="content">
      <div class="tryContent fadeIn">
        <div class="tryLeft">
          <div class="tryLeftText">
            <div class="bigTextColor">{{ title }}</div>
            <div class="smallTextColor">{{ describe }}</div>
            <div class="smallTextColor" style="font-weight: 600;font-size: 20px">{{ uploadTip }}</div>
            <div class="examples">
              <div v-for="(item,i) in examples" :key="i" v-loading="i==exmpleIndex&&!istry"
                   :element-loading-customClass="'loadingSvg'">
                <img :src="item.src" alt="" @click="showExample(item,i)">
              </div>
            </div>
            <div class="uploadFiles">
              <el-upload
                  action="http://47.88.63.16:8081/fitness_pilot/image_capture/webapp/analyze_food_img"
                  multiple
                  :before-upload="beforeUpload"
                  :on-success="handleSuccess"
                  :show-file-list="false"
              >
                <!--                <button class="uploadBtn" :class="!istry?'isBtnDisabled':''" :disabled="!istry"><span class="loading"-->
                <!--                                                                                                      v-show="!istry"><el-icon-->
                <!--                    class="_loading"><Loading/></el-icon></span>Upload Photo-->
                <!--                </button>-->
              </el-upload>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
  <el-dialog
      v-model="dialogVisible"
      :title="name"
      :width="isMobileDevice?'100%':740"
      :fullscreen="isMobileDevice"
  >
    <div class="report">
      <div class="reportHeader">
        <div class="_reportImage">
          <div class="reportImage">
            <div class="showImage">
              <img :src="foodImageSrc"/>
            </div>
          </div>
        </div>
        <div class="_reportData">
          <div class="reportData">
            <div class="showData">
              <div class="_showData">
                <el-row class="showDataTop" v-for="(item,i) in nutritionalComposition" :key="i">
                  <el-col class="_showDataText" :span="6">
                    <span class="reportText">{{ item.title }}</span>
                  </el-col>
                  <el-col :span="12">
                    <div class="Progress">
                      <div class="nowProgress" :style="{width:i==0?item.total/700*100+'%':item.percentage*300+'%'}">
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="6" class="bigDataText _bigDataText">
                    <span class="reportText">{{ item.total }} {{ i == 0 ? 'Cal' : 'g' }}</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="reportTip">
        <div class="_reportTip">
          <span class="reportTitle">Food Evaluation</span>
          <br/>
          <span v-html="formdata(overall_evaluation)">

          </span>
        </div>
        <div class="_reportTip">
          <span class="reportTitle">Suggestions</span>
          <br/>
          <span v-html="formdata(advice)">

          </span>
        </div>
      </div>
    </div>

  </el-dialog>
</template>

<script>
import Compressor from 'compressorjs';

import {isMobileDevice} from "@/js";
import {ElMessage} from 'element-plus'

export default {
  name: "web-try",
  data() {
    return {
      title: "Start From Today",
      describe: "Upload your meal now! Aivocado will provide you with nutrition analysis and diet advice.",
      uploadTip: "Try with example images!",
      examples: [
        {
          type: 0,
          src: require("./../assets/ex1.jpg"),
          name: "Oatmeal",
          nutritionalComposition: [
            {title: "Calories", total: 160},
            {title: "Carbs", total: 27, percentage: 0.09},
            {title: "Protein", total: 6, percentage: 0.12},
            {title: "Fat", total: 3.2, percentage: 0.04},
          ],
          advice: `Consider adding a source of protein to this meal, such as nuts, seeds, or yogurt, to increase satiety and provide more sustained energy.
\nBe mindful of the added sugar content in the muesli and cereal, and opt for varieties with lower sugar content or choose plain oatmeal instead.
\nConsider adding some fresh fruit or berries to this meal for additional vitamins, minerals, and fiber.`,
          overall_evaluation: `Carbohydrate: Muesli and cereal are both good sources of carbohydrates, which provide energy for the body. Oatmeal also contains carbohydrates, but in a slower digesting form known as complex carbohydrates.
\nProtein: Muesli and cereal may contain some protein, but oatmeal is a better source of protein. However, the protein content in this meal is relatively low.
\nFat: Muesli and cereal may contain some healthy fat from nuts and seeds, but the overall fat content in this meal is low. Oatmeal is virtually fat-free.`
        },
        {
          type: 0,
          src: require("./../assets/ex2.jpg"),
          name: "Burger",
          nutritionalComposition: [
            {title: "Calories", total: 450},
            {title: "Carbs", total: 29, percentage: 0.09},
            {title: "Protein", total: 20, percentage: 0.4},
            {title: "Fat", total: 17, percentage: 0.26},
          ],
          advice: `This meal is high in fat and lacks carbohydrates. Consider adding a side of vegetables or a small serving of fruit to balance out the meal.
\nLimit consumption of this type of meal as it is high in saturated fat and sodium, which can increase the risk of heart disease and other health problems.`,
          overall_evaluation: `Carbohydrate: There will be some carbohydrates present in the bun of the burger, depending on the type of bun used. However, the amount will typically be small compared to the protein and fat in the meal.
\nProtein: The main source of protein in this meal will come from the patty of the burger. The amount and quality of protein will depend on the type of meat used to make the patty.
\nFat: There will be a significant amount of fat in this meal, mainly coming from the patty of the burger. The amount and type of fat will depend on the type of meat used, as well as any additional ingredients added to the patty. `
        },
        {
          type: 0,
          src: require("./../assets/ex3.jpg"),
          name: "Salad",
          nutritionalComposition: [
            {title: "Calories", total: 94},
            {title: "Carbs", total: 9, percentage: 0.03},
            {title: "Protein", total: 7, percentage: 0.14},
            {title: "Fat", total: 4.4, percentage: 0.06},
          ],
          advice: `Watch your portion size: Caesar salads can be deceptively high in calories and fat, so be mindful of your serving size. Stick to a smaller portion or consider ordering a half salad.
\nAdd some vegetables: While Caesar salads typically include romaine lettuce, consider adding some additional veggies like cherry tomatoes or cucumber to increase the nutrient profile of your meal.
\nConsider making your own: If you have the time, consider making your own Caesar dressing with healthier ingredients like Greek yogurt or avocado oil to control the amount of fat and calories in your meal.`,
          overall_evaluation: `Carbohydrate: There may be some carbohydrates present in the croutons that may accompany the salad, as well as in the dressing used. However, the amount of carbohydrates will typically be moderate compared to the protein and fat in the meal.
\nProtein: The main source of protein in this meal will come from the chicken or other protein source added to the salad. The amount and quality of protein will depend on the type of protein used.
\nFat: There will be some fat present in the salad due to the dressing used. Caesar dressings are typically made with high-fat ingredients like olive oil and Parmesan cheese. `
        },
        {
          type: 0,
          src: require("./../assets/ex4.png"),
          name: "Steak",
          nutritionalComposition: [
            {title: "Calories", total: 679},
            {title: "Carbs", total: 0, percentage: 0},
            {title: "Protein", total: 62, percentage: 0.24},
            {title: "Fat", total: 48, percentage: 0.2},
          ],
          advice: `Aim to balance your plate with a variety of vegetables or a salad to increase the nutrient content of your meal. This can help ensure you're getting enough fiber, vitamins, and minerals.
\nConsider the way your steak is cooked. Grilling or pan-searing can increase the formation of harmful compounds called heterocyclic amines (HCAs). To reduce HCA formation, try marinating your steak before cooking it, using a lower heat, or incorporating antioxidant-rich spices like oregano and rosemary.
\nBe mindful of portion sizes. A serving size of steak is typically around 3-4 ounces, which is roughly the size of a deck of cards. `,
          overall_evaluation: `Carbohydrate: Since your meal consists of steak, the main sources of nutrients are protein and fat. It contains very small amounts of carbohydrates, mostly in the form of glycogen stored in muscle tissue
\nProtein: Steak is a good source of high-quality protein, which is necessary for building and repairing tissues in the body. It contains all essential amino acids that the body needs for the growth and maintenance of muscles
\nFat: In terms of fat, the amount and type of fat in steak depends on the cut and how it's cooked. A serving of steak provides ample amounts of saturated and unsaturated fat. Saturated fat are found in higher amounts in fattier cuts of meat, while leaner cuts contain more unsaturated fat.`
        }
      ],
      istry: true,
      dialogVisible: false,
      nutritionalComposition: [
        {title: "Calories", total: 679},
        {title: "Carbs", total: 0, percentage: 0},
        {title: "Protein", total: 62, percentage: 0.24},
        {title: "Fat", total: 48, percentage: 0.20},
      ],
      name: "",
      weight: 100,
      overall_evaluation: "",
      advice: "",
      foodImageSrc: require("./../assets/ex1.jpg"),
      isMobileDevice: isMobileDevice(),
      exmpleIndex: null,

    }
  },
  methods: {
    handleSuccess(response, file, fileList) {
      if (response.code == 0) {
        let data = response.data.result
        this.weight = parseInt(data.average_weight)
        this.nutritionalComposition[0].total = parseInt(data.calorie)
        this.nutritionalComposition[1].total = (~~(this.weight * data.ingredients.carbohydrate_ratio * 100)) / 100
        this.nutritionalComposition[2].total = (~~(this.weight * data.ingredients.protein_ratio * 100)) / 100
        this.nutritionalComposition[3].total = (~~(this.weight * data.ingredients.fat_ratio * 100)) / 100
        this.nutritionalComposition[1].percentage = data.ingredients.carbohydrate_ratio.toFixed(2)
        this.nutritionalComposition[2].percentage = data.ingredients.protein_ratio.toFixed(2)
        this.nutritionalComposition[3].percentage = data.ingredients.fat_ratio.toFixed(2)
        this.advice = data.advice
        this.overall_evaluation = data.overall_evaluation
        this.dialogVisible = true
        this.istry = true
      } else {
        ElMessage({
          message: 'Food not recognized, try changing a picture',
          type: 'warning',
        })
      }
      // 在这里可以处理上传成功后的逻辑，比如更新数据或显示上传成功的消息
    },
    formdata(val) {
      //val = val.replace('\n', "<br />")
      let arry = val.split("\n")
      let arr = []
      for (let item of arry) {
        if (item != "") {
          item = item.replace('Carbohydrate:', '<b>Carbohydrates:</b>')
          item = item.replace('Carbohydrates:', '<b>Carbohydrates:</b>')
          item = item.replace('Protein:', '<b>Protein:</b>')
          item = item.replace('Fat:', '<b>Fat:</b>')
          arr.push(`<li>${item}</li>`)
        }
      }
      return "<ul style='padding-left: 20px'>" + arr.join("") + "</ul>"
    },
    showExample(item, i) {

      if (this.istry) {
        this.istry = false
        this.exmpleIndex = i
        setTimeout(() => {
          this.istry = true
          this.dialogVisible = true;
        }, 2000)
        this.nutritionalComposition = item.nutritionalComposition;
        this.foodImageSrc = item.src;
        this.overall_evaluation = item.overall_evaluation;
        this.advice = item.advice;
        this.name = item.name
      } else {
        ElMessage({
          message: 'Please wait',
          type: 'warning',
        })
      }

    },
    beforeUpload(file) {
      console.log(file)
      let that = this
      that.foodImageSrc = URL.createObjectURL(file)
      new Compressor(file, {
        quality: 0.2,
        success: (result) => {
          // 将压缩后的图片数据设置为上传的文件数据
          file.dataURL = result;
          that.istry = false
        },
        error: (err) => {
          console.error(err);
        }
      });
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        return true;
      } else {
        ElMessage({
          message: 'Images only support jpeg, png',
          type: 'warning',
        })
        return false;
      }

    },

  },

}
</script>

<style scoped lang="less">


.loading {
  position: relative;
  top: 4px;

}

._loading {
  animation: circleRoate 1s linear infinite;
}

@keyframes circleRoate {

  0% {

    transform: rotate(0deg);

  }

  100% {

    transform: rotate(360deg);

  }

}

.content {
  margin-top: 150px;
  margin-bottom: 100px;
}

.tryContent {
  display: flex;
  width: 100%;
}

.tryLeft, .tryRight {
  flex: 1;
}

.uploadFiles {
  margin-top: 30px;
}

.tryExamples {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    -o-object-fit: contain;
    object-fit: contain;
    max-height: 100%;
    position: absolute;
    left: 0px;
    top: 10px;
    margin: auto;
  }
}

.uploadBtn {
  width: 200px;
  height: 50px;
  opacity: 1;
  background: rgba(15, 36, 32, 1);
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 21.6px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  vertical-align: top;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
}

.isBtnDisabled {
  background: rgba(15, 36, 32, 0.5);

  &:not(:hover) {
    transform: scale(1.1);
  }
}

.circular {
  width: 30px !important;
  height: 30px !important;
}

.examples {
  width: 100%;
  display: flex;
  margin-top: 30px;


  div {
    flex: 1;

    img {
      width: 80%;
      height: 90%;
      object-fit: cover;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      margin-top: 5%;

      &:hover {
        transform: scale(1.1);
        box-shadow: 55px 10px 50px rgba(0, 0, 0, 0.06);
      }


    }


  }
}

.showData {
  width: 100%;
}

.reportTitle {
  color: #47944c;
  font-size: 20px;

}

.bigTextColor {

}

.smallTextColor {
  margin-top: 20px;
}

.tryLeftText {
  width: 100%;
  text-align: center;
}

.reportHeader {
  display: flex;

  .reportImage {
    width: 100%;
    height: 180px;
    position: relative;

    .showImage {
      width: calc(100% - 20px);
      margin-right: 20px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }

  ._reportImage, ._reportData {
    flex: 1;
  }

  .reportText {
    color: black;
    letter-spacing: 0px;
    font-size: 18px;
  }

  .showDataTop {
    height: 55px;
  }

  .Progress {
    width: 100%;
    background: #CDE2C9;
    height: 20px;
    border-radius: 10px;
    margin-top: 1px;

    .nowProgress {
      background: #47944c;
      height: 100%;
      border-radius: 10px;
      max-width: 100%;
    }


  }

  .bigDataText {
    text-align: left;
    padding-left: 10px;
  }


}

._reportTip {
  padding: 20px;
  background: #ebf2e9;
  margin-bottom: 20px;
  border-radius: 10px;

}


@media (max-width: 992px) {
  .showData {
    margin-top: 30px;
  }

  .showImage {
    width: 100% !important;
    margin-right: 0px !important;
  }

  .tryContent {
    display: inline-block;

    .tryLeftText {
      width: 100%;
      text-align: center;
    }

    .examples {
      width: 100%;
    }
  }

  .tryRight {
    margin-top: 30px;

    .tryExamples {
      img {
        position: relative;
      }
    }
  }

  .reportHeader {
    display: inline-block;
    width: 100%;
  }

  .showImage {
    margin: auto;
  }
}
</style>