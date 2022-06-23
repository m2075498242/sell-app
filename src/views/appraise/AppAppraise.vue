<template>
  <div class="appraise">
    <div class="appraise-top dpflex">
      <div class="desc-left">
        <div class="outer">
          <p class="score-num">{{ evaluateList.score }}</p>
          <p class="score">综合评分</p>
          <p class="propor">高于周边商家<span>96%</span></p>
        </div>
      </div>
      <div class="desc-right">
        <div class="start">
          <p>
            <span>服务态度</span>
            <van-rate
              :size="15"
              v-model="num"
              allow-half
              void-icon="star"
              void-color="#eee"
              color="#ffd21e"
              @change="onChange"
            />
            <span>{{ num }}</span>
          </p>
          <p>
            <span>菜品质量</span>
            <van-rate
              :size="15"
              v-model="num1"
              allow-half
              void-icon="star"
              void-color="#eee"
              color="#ffd21e"
              @change="change"
            />
            <span>{{ num1 }}</span>
          </p>
          <p>
            <span>送达时间</span>
            <b>20分钟</b>
          </p>
        </div>
      </div>
    </div>
    <div class="appraise-bottom">
      <!-- 导航 -->
      <div class="card-nav">
        <van-tabs type="card">
          <van-tab :title="'全部' + evaluateList.length">
            <div
              class="user-info dpflex"
              v-for="(item, index) in evaluateList"
              :key="index"
            >
              <!-- {{ item }} -->
              <img :src="item.avatar" />
              <div class="right">
                <p class="user dpflex">
                  <span>{{ item.username }}</span>
                  <span>{{ Time(item.rateTime) }}</span>
                </p>
                <p>
                  <span>{{ item.score }}※</span>
                  <span>{{ item.deliveryTime }}分钟送达</span>
                </p>
                <p>{{ item.text }}</p>
                <p>
                  👍
                  <span v-for="item1 in item.recommend" :key="item1">{{
                    item1
                  }}</span>
                </p>
              </div>
            </div>
          </van-tab>
          <van-tab title="满意"></van-tab>
          <van-tab title="不满意">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            ipsum omnis? Asperiores dolores voluptate optio vitae ipsam hic
            error culpa ex cupiditate saepe, nulla modi nobis, mollitia ut
            praesentium rem? In quam animi, deserunt a voluptatibus ipsa id!
            Earum totam ipsa non aspernatur ducimus laudantium eius
            necessitatibus voluptatibus ipsam ex, placeat architecto molestias
            qui adipisci, magnam officia velit? Omnis, quod! Voluptates rerum
            nostrum odit modi sint, repellat voluptatem soluta consequatur sed
            omnis ipsam quidem reiciendis deleniti quasi assumenda delectus
            impedit labore? Sapiente ullam molestias dolorem facilis porro
            tempore esse ab! At blanditiis excepturi sunt perspiciatis obcaecati
            tenetur, id placeat sequi maiores quibusdam, reiciendis perferendis
            odit odio, nihil culpa. Quos pariatur quibusdam ipsa reprehenderit
            eaque, ea temporibus facere ut eius laborum. Obcaecati adipisci,
            libero aliquam cumque laborum repellat minima. Corrupti blanditiis,
            quasi odit impedit provident ratione aperiam debitis nisi obcaecati
            atque. Consectetur similique nam commodi nemo ratione tempora quod
            voluptate est. Cum soluta quis cumque inventore molestiae eos quasi
            magnam. Ex nesciunt, amet, animi porro cumque laudantium deleniti
            voluptas tempora optio dignissimos similique soluta, eius vel error
            delectus voluptate? Molestiae, facere? Eum, perferendis hic? Enim
            quisquam deleniti sint nesciunt, dolorem perferendis, quas
            architecto alias molestias impedit aperiam aliquid? Dicta tenetur,
            mollitia qui, ad quas hic quos fugit quasi, magni provident omnis?
            Provident magnam consequatur necessitatibus, veritatis vitae,
            perferendis a eveniet mollitia illum consequuntur ullam vel saepe
            eius quibusdam recusandae dolores ipsa repellendus, officia
            accusamus aut iste voluptates. Iusto repudiandae hic adipisci.
            Nostrum quae deleniti quisquam corporis impedit repudiandae quia
            reprehenderit ipsa soluta tempora, assumenda recusandae deserunt
            incidunt aliquam perspiciatis, nobis sapiente totam! Consequuntur
            vero natus tempore nesciunt, modi temporibus officiis minus. Magni
            dicta ad iure velit possimus deleniti ex veniam nulla dignissimos
            sapiente atque ea culpa accusamus suscipit iste quas modi cum optio
            veritatis molestiae, obcaecati unde. Voluptatibus, voluptates!
            Mollitia, cum? Illo facere at nemo sed accusantium aperiam, hic
            ipsum impedit sapiente voluptatibus eius dolorum? Debitis doloremque
            iste saepe repellat? Consequuntur incidunt labore neque ducimus.
            Fugiat consequatur facere enim doloremque totam? Temporibus libero
            sed et saepe aut nihil veniam eligendi itaque. Pariatur minima
            molestias dolor accusamus, sit fuga cupiditate quidem modi, enim
            laudantium in esse, officia magni! Eveniet, repellat magni.
            Accusantium. Blanditiis architecto sed nemo fugit dolorem facere
            praesentium voluptas molestiae alias est nostrum maxime eum mollitia
            quis dolore recusandae obcaecati, quidem labore illo rerum
            repudiandae quaerat? Neque repellendus voluptatum quaerat. Aperiam
            adipisci ratione autem iste natus impedit debitis nisi odit
            consequuntur quod voluptas sit nobis labore, amet culpa reiciendis
            aspernatur perferendis architecto maxime? Harum ea eaque cum commodi
            debitis delectus. Odit aliquam, quos debitis unde natus minus esse
            dolore? Perspiciatis blanditiis necessitatibus tempore voluptatem,
            maxime eum sint iusto, eveniet quaerat suscipit vel distinctio
            impedit labore mollitia, dolorum ipsum molestiae incidunt. Ea neque
            provident placeat cum quos consequatur nam quod quasi debitis nobis
            quaerat inventore aliquam dolorem soluta voluptate autem odio
            accusamus, consequuntur, voluptatibus blanditiis fugiat, perferendis
            nisi vitae iure! Consectetur? Ad incidunt, earum voluptate, rem
            sapiente repellat recusandae fuga vero consequatur, sit in
            doloribus? Delectus ipsum dolorum aliquid id architecto nulla velit
            facilis, quod impedit, laboriosam dolorem, eos recusandae nam. Ullam
            non, deserunt corporis totam veritatis dolore sequi, corrupti
            tempora vero enim laborum est. Sed delectus animi fuga corrupti quia
            voluptates eligendi, minus architecto blanditiis modi dignissimos
            quos ea. Odio. Quidem cumque dolore at earum consequatur officiis
            quod sapiente labore accusamus ex necessitatibus asperiores,
            temporibus voluptas dolorem laboriosam culpa vero fugiat esse,
            consequuntur nemo vel adipisci eveniet! Deserunt, odio tempora.
            Eveniet repellat soluta, deleniti illum vel culpa ullam quas
            assumenda. Quo at dolores ipsam aliquam ex veniam expedita deserunt
            nihil dicta voluptatem est nemo maiores, repudiandae eum inventore
            voluptates incidunt! Fugiat, perferendis provident necessitatibus
            alias obcaecati rem, et corrupti possimus id nemo qui cum iusto
            eaque animi ratione beatae voluptatum quaerat facere facilis maxime
            tempore unde? Quis totam quos vero! Nulla similique doloremque
            recusandae officia tenetur, vero qui quas iste. Blanditiis nobis
            laboriosam dolor odio labore, vitae corporis ipsam sed voluptates
            nulla qui, incidunt ad pariatur, ipsa molestias reprehenderit
            voluptatibus. Ipsa aspernatur, illo odit corrupti tenetur laborum
            ab? Enim nesciunt numquam sunt, quas quidem sit esse voluptate id,
            ducimus suscipit ab, distinctio impedit obcaecati? Iure quo illum
            inventore suscipit dignissimos. Aliquam dicta amet est veniam magni
            mollitia officia doloribus totam dolorum saepe atque minima natus
            tempore nam laudantium pariatur modi necessitatibus, voluptatem
            veritatis dolore eius. Labore blanditiis dolore sequi iure. Quae
            rerum optio a inventore ipsum odit, possimus sunt officia, ipsa
            facere cupiditate dolores fuga repudiandae obcaecati temporibus
            expedita voluptas porro quos voluptates quia nulla quaerat enim
            saepe. Dignissimos, enim. Aliquam, blanditiis, dolores nesciunt
            laboriosam officiis cupiditate architecto beatae nulla error atque
            dignissimos rem. Quaerat iste debitis dicta assumenda doloremque
            nostrum cupiditate nulla reprehenderit quam! Quia placeat tenetur
            voluptatem voluptates. Rerum reprehenderit perspiciatis quibusdam
            quaerat sint quia modi dolorum enim, harum non dolores amet ullam
            maiores culpa temporibus ab! Soluta perspiciatis delectus quam
            similique eaque ad rem magni itaque blanditiis. Ab qui autem illo
            quidem assumenda, non dicta eveniet laboriosam recusandae cumque
            blanditiis ad dolorem expedita sequi pariatur esse ut repellat vitae
            culpa mollitia. Placeat harum dignissimos dolore cum praesentium.
            Rem ex magni dolor eius cupiditate id officia, dignissimos
            voluptatibus necessitatibus! Architecto beatae rerum, nam vero,
            fugiat quasi magni corporis ducimus, ea quibusdam voluptates laborum
            facere commodi nobis distinctio ad! Quisquam ut reiciendis pariatur
            praesentium aliquid harum nulla veniam explicabo. Fugiat, ex quis
            harum id maxime sit omnis commodi velit aliquid unde aut autem
            accusamus placeat dolores corporis est consequuntur! Similique,
            inventore. Repudiandae molestias libero, doloremque veritatis ullam
            fugit debitis corrupti voluptatum. Nisi fugit, dicta distinctio,
            facere aperiam voluptatibus consectetur, aliquam fuga nulla ullam
            maxime tempora nemo beatae voluptas mollitia! Amet, sunt. Odit
            nesciunt natus fuga veniam, eaque blanditiis ratione saepe iste
            suscipit error quibusdam tenetur recusandae aliquid libero
            reprehenderit fugit commodi veritatis magnam dicta officiis quod cum
            itaque aspernatur? Ut itaque excepturi veniam dolorem maiores, natus
            modi ad, fuga praesentium culpa voluptatibus eligendi. Delectus,
            officiis omnis exercitationem tenetur cumque illo dolorem ab alias
            modi ipsa, reprehenderit, eos minus quasi. Molestiae esse
            praesentium quidem rerum commodi mollitia maiores fugiat, culpa
            exercitationem saepe ducimus suscipit officiis error at assumenda
            architecto ea eligendi, debitis dolore velit aliquam natus? Labore
            non accusantium magnam? Officia illum sint, eligendi quia asperiores
            porro laudantium, vitae laboriosam rem deleniti laborum minima ad a
            aut, unde iste earum iusto dolor. Soluta beatae voluptatibus dicta
            enim aspernatur, nam praesentium. Perspiciatis quae officia ut
            aliquam. Incidunt magnam unde dolorum consectetur, voluptas vel eum
            cumque quas, nulla inventore fuga dignissimos temporibus nostrum
            molestias id repellat odio harum velit perspiciatis provident
            labore? Natus omnis alias at expedita voluptatum molestias vitae
            sunt suscipit maiores possimus. A quam fugit culpa recusandae nisi,
            labore delectus corporis, deleniti voluptate obcaecati mollitia
            nihil itaque distinctio quod minus! Quisquam commodi placeat ab,
            sint iure porro error natus rerum at esse, recusandae enim
            repudiandae reiciendis impedit cumque maiores ut ex asperiores
            deleniti illum soluta consectetur quia. Tempora, aliquid laborum.
            Asperiores iusto eligendi corporis fugiat vero illo. Aliquid ipsum
            accusamus pariatur earum unde praesentium repudiandae? Cupiditate
            rem, molestiae modi ea doloribus laudantium eius fuga! Eius tenetur
            laboriosam eveniet eos vel! Voluptate nobis voluptas sequi commodi
            maxime vero quam officia beatae, harum quas amet tempora molestias
            voluptatum! Dolore sint quod modi fugiat, facere tempora quo ratione
            explicabo provident voluptate fuga corrupti! Fugit accusamus, ullam
            non, pariatur quo architecto earum eaque sit consequuntur eligendi,
            officia tempore eius hic magnam inventore corporis quisquam
            laboriosam maiores minus minima? Voluptatum possimus debitis magni
            dignissimos ea. Officia cupiditate corrupti quos reiciendis
            obcaecati iste, rem, expedita debitis non est exercitationem quas
            aliquid laborum blanditiis odit ab autem consequatur sequi dolores
            vitae similique earum a! Temporibus, distinctio minima? Voluptatibus
            culpa nostrum alias ab non consequatur fugiat quibusdam natus iusto
            inventore laudantium reprehenderit officia sapiente iste distinctio
            cupiditate, odio iure, eligendi velit quia laboriosam asperiores
            odit incidunt? Vel, architecto. Dolor laborum adipisci repellat
            accusamus magni vero. Eum eveniet nobis voluptatem nemo atque
            obcaecati aperiam, nihil veniam. Harum id quas quaerat deserunt
            nihil doloribus repudiandae libero quia, animi, impedit incidunt!
            Officiis atque dignissimos aspernatur rerum. Aspernatur in ea illo
            quam fugiat a sint ipsa, assumenda doloremque? A, possimus ut
            consequuntur ex illum, autem reprehenderit velit veritatis,
            voluptatibus mollitia esse ullam. Blanditiis eius architecto magnam?
            Totam ipsum minus repellat dignissimos perspiciatis porro mollitia
            corporis laborum. Quod, aspernatur reprehenderit? Autem, consectetur
            cupiditate sapiente tempora, velit natus necessitatibus aliquam ut
            tenetur vitae facilis. Atque, quod reiciendis velit amet inventore,
            in doloremque rem, eius dicta animi voluptas deserunt. Quidem iusto
            consectetur neque doloribus. Ad recusandae non aliquam accusantium
            facilis eius reprehenderit libero quo! Quibusdam. Eum nihil mollitia
            maxime, est vero incidunt, vel facilis ipsum perferendis fugit, quam
            suscipit labore exercitationem vitae adipisci beatae ab! Repellat
            illo aperiam id tempore dolorem mollitia. Totam, pariatur tempore?
            Quos dolor necessitatibus temporibus facilis possimus distinctio id
            voluptatum, tempora iure tenetur earum. Vero minima odio in, facere
            molestias corporis voluptatibus quos quidem voluptas quasi officia
            veritatis! Tenetur, repellat itaque. Necessitatibus deserunt ratione
            veritatis reprehenderit ab nulla, optio nesciunt eligendi enim
            temporibus odit labore eius totam provident qui unde? Repellendus
            laborum facere qui, corporis in placeat accusantium reiciendis?
            Earum, dolor!
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import { evaluate } from "@/api/index.ts"
@Component
export default class AppAppraise extends Vue {
  evaluateList = [];
   value = 2.5;
   num = 2.5;
   num1 = 2.5;
  //  事件
  onChange(value:number) {
    this.num = value;
    console.log(this.num);
  };
   change(value:number) {
    this.num1 = value;
     console.log(this.num1);
  };
  // 渲染
  private async created(){
    let res = await evaluate();
    console.log(res.data);
    this.evaluateList = res.data.data;
  }
  // 时间戳
  Time(time:number){
    const date = new Date(time)
    const Y = date.getFullYear()
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const Min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const dateTime = Y + '-' + M + '-' + D + ' ' + H + ':' + Min
    return dateTime;
  }
}
</script>

<style scoped lang="less">
.appraise{
  height: 100%;
  background-color: #f3f4f6;
}
.appraise-top{
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  background-color: #fff;
  .desc-right{
    flex: 1;
  }
}
.start{
  padding: 25px  0 25px 10px;
  p{
    margin-bottom: 8px;
    span{
      font-size: 14px;
      margin-right: 10px;;
    }
  }
}
.desc-left{
  width: 150px;
  padding: 30px 0;
  text-align: center;
  .outer{
    border-right: 2px solid #eee;
  }
  p{
    margin-bottom: 8px;;
  }
  .score-num{
    font-size: 20px;
    color: #fdc115;
  }
  .score{
    font-size: 16px;
  }
  .propor{
    font-size: 12px;
    color: #c1c1c1;
  }
}
.appraise-bottom{
  height: 100%;
  padding: 10px;
  flex: 1;
}
.card-nav{
  height: 100%;
  .user-info{
    margin: 10px;
    border-bottom: 1px solid #999;
    padding-bottom: 20px;
    img{
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
    .right{
      flex: 1;
      .user{
        justify-content: space-between;
      }
    }
  }
}
/deep/.van-tabs--card{
  height: 100%;
}
/deep/.van-tabs__content{
  height: 100%;
  margin-top: 20px;
  overflow-y: scroll;
}
.van-tab__pane{
  overflow-y: scroll;
}
</style>
