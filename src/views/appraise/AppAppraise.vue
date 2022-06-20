<template>
  <div class="appraise">
    <div class="appraise-top dpflex">
      <div class="desc-left">
        <div class="outer">
          <p class="score-num">5.0</p>
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
          <van-tab title="全部">
            <!-- <div class="user-info"></div> -->
          </van-tab>
          <van-tab title="满意">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sed
            beatae harum placeat exercitationem. Cumque in, placeat rem totam
            minima libero et beatae, distinctio veniam, ipsum aliquid animi
            fugit expedita. Maiores cumque corporis libero debitis magni? Hic ea
            nihil laborum aperiam debitis harum consectetur voluptas qui saepe
            officiis perspiciatis iusto, non repudiandae soluta aliquam! Est
            neque obcaecati ducimus eveniet inventore! Quaerat animi quasi
            deleniti est atque omnis ab repellendus provident velit, ducimus
            sequi ullam aut itaque corporis voluptatum dolorum optio temporibus
            excepturi cum quod tempore eius modi. Soluta, provident dolorem.
            Autem nemo blanditiis illum officiis commodi. Accusamus tempora
            cupiditate consequatur quae iure aspernatur reiciendis facere labore
            placeat. Veritatis neque a similique iure eum, dolorum quibusdam
            debitis molestias modi aliquam minus. Tempore suscipit blanditiis
            nihil voluptate qui dolorem odit. Hic quia voluptas quibusdam modi
            ipsam sed a. Iure expedita molestiae hic labore quibusdam ab
            facilis. Neque illum delectus rem excepturi eaque! Doloribus
            molestiae consectetur placeat ratione, adipisci voluptatem,
            quibusdam vero eligendi cupiditate eaque facere accusantium commodi
            harum qui quam? Fugit nisi inventore maiores unde, nesciunt iste
            optio iure suscipit rem quas. Eligendi rerum dolorum velit accusamus
            officiis natus, ipsam doloribus aperiam consequatur. Nulla
            distinctio, quisquam molestias hic voluptatibus facilis dolor
            asperiores atque odit similique saepe in quis commodi voluptate
            autem vel! Reprehenderit, velit facere. Quos unde vitae placeat
            debitis corrupti repudiandae dicta temporibus molestiae cumque, rem
            iure earum quis voluptatum ad consectetur non maiores facere. Libero
            ratione at quisquam necessitatibus officiis! Quasi mollitia animi
            perferendis tempore at eius assumenda numquam unde quae modi
            quibusdam nobis, ipsa architecto qui? Libero ipsam mollitia quam sit
            nam, quia, unde culpa, nostrum impedit iste perferendis! Quibusdam
            ad nostrum ex, eius ab, provident ipsam quidem veniam illo
            dignissimos amet facere vitae! Blanditiis dignissimos fuga, quo quod
            assumenda, repudiandae quibusdam, laboriosam sed non ipsa
            repellendus voluptatum recusandae. Sit voluptatibus modi ipsam earum
            quia molestiae magnam mollitia delectus eum quasi molestias et,
            dignissimos autem, veniam impedit accusantium fugit est eos error
            voluptate non? Magnam reiciendis nisi perspiciatis doloremque? Minus
            consectetur doloremque nam eligendi officia, illo aut hic ipsam
            dolorem iste blanditiis! In expedita ad quod doloribus? Repudiandae
            laborum voluptatem dolorum tenetur tempore consectetur laudantium
            numquam dignissimos quaerat voluptatibus. Ducimus alias sed magni,
            quo maiores consequatur culpa tempore reiciendis consectetur totam
            sapiente, corporis quia tenetur. Sequi laudantium quod voluptas
            pariatur assumenda excepturi maxime impedit error facilis eos?
            Vitae, beatae! Ipsam, fuga! Vitae dolore cupiditate minima doloribus
            ratione delectus adipisci consequatur eveniet, quod, soluta
            sapiente, suscipit culpa ipsa rerum incidunt quis dignissimos
            voluptatum nihil esse quisquam vero corporis explicabo quae? Nostrum
            facere soluta cupiditate esse inventore iure vel alias, quam
            voluptatum quasi labore cum quisquam sint. A officiis nostrum autem
            repellendus cum quidem quo, earum, illo aliquam deleniti, porro
            explicabo. Neque molestias, facere voluptas eligendi soluta dolorum
            aliquid culpa assumenda natus iusto optio, quo quae a similique
            voluptatibus provident labore blanditiis cumque officiis. Veniam
            voluptates harum in molestias tempore? Ipsa! Cum dolore eveniet
            perferendis harum aut quas quasi fugiat eius atque animi culpa neque
            repellendus, commodi accusamus omnis tenetur tempore id quod
            pariatur fugit veniam officiis dolor. Error, maxime doloribus! Ad
            unde rem qui soluta est quas doloremque delectus et quasi doloribus
            aliquam laudantium expedita eum recusandae adipisci, reiciendis
            facilis, autem pariatur culpa quae sit ipsam. Non eaque sed
            quibusdam? Ipsam cupiditate saepe aliquid dolorum quia tempora
            voluptates dignissimos beatae recusandae pariatur, perferendis error
            esse repudiandae eaque nisi iure! Magni culpa voluptas dicta ad
            molestiae, dolorum autem temporibus reprehenderit natus? Sed
            facilis, eius similique sint quibusdam eligendi blanditiis,
            voluptatibus illum atque nisi eos, quam sapiente sunt odio voluptas
            iste voluptatem sit! Impedit assumenda sequi odio esse debitis
            ducimus ab perspiciatis. Beatae quisquam est nesciunt molestiae in
            ducimus inventore. Odit quis possimus neque. Mollitia quia libero
            explicabo nihil porro cum exercitationem sit distinctio facere
            perferendis reiciendis, fugiat repudiandae consequatur, amet beatae!
            Laudantium quaerat explicabo molestiae asperiores quidem, iusto
            facilis numquam fugiat vitae. Dolor qui doloremque et expedita a
            aspernatur sed officia rerum eligendi numquam quod, facere
            necessitatibus nobis natus accusamus nostrum! Aliquam illum
            praesentium ea, consectetur at enim ullam repudiandae consequatur
            adipisci. Doloremque nulla quisquam magnam ipsa temporibus, sint
            nihil illum rerum esse? Repellat vel, ducimus a natus commodi nam
            error! Numquam sequi eos corporis nihil quasi eius blanditiis iure
            ullam accusamus repudiandae nisi dolores, repellat sit! Quaerat
            veritatis, assumenda placeat aut atque vero nostrum iusto earum
            deserunt ipsum repudiandae error? Dolores impedit placeat optio
            fugiat perferendis pariatur nesciunt fuga corrupti autem quisquam.
            Nesciunt vel distinctio quos vitae earum eligendi blanditiis
            consequatur sequi. Numquam, quidem aut? Error amet odit eum
            doloremque. Quos, aliquam! Sint harum perspiciatis assumenda maxime.
            Ullam ipsam, dolores fugiat excepturi nam ea quaerat ipsum, magnam
            quam asperiores amet, quas dolorem suscipit fugit deserunt. Facere
            nesciunt nostrum velit animi. Debitis magnam sunt quasi veniam
            voluptatibus voluptatum soluta incidunt vero sequi ex eaque,
            cupiditate tempore quam. Perferendis a porro voluptates nobis sint,
            consectetur sed iste ratione repudiandae laudantium eveniet
            corrupti! Earum quidem beatae, consectetur quibusdam perspiciatis
            eos, consequuntur iste error praesentium odio possimus, rem iusto.
            Eveniet sit sunt aliquid! Perspiciatis, accusantium. Alias, modi!
            Explicabo ipsa ratione quaerat officiis obcaecati placeat? Vero
            rerum alias magni officia deserunt aspernatur accusantium natus
            possimus quam totam dolore aperiam reprehenderit, harum aliquam
            suscipit quisquam fugiat. Libero quaerat exercitationem quasi
            ratione earum dicta qui possimus eaque? Architecto vitae corporis
            nisi est inventore totam nam distinctio doloremque commodi veritatis
            sapiente labore exercitationem dolorem illo, veniam sit, suscipit
            odio laudantium rerum. Quaerat quasi quisquam delectus expedita
            dignissimos quae. Laborum, voluptatibus nemo deleniti hic asperiores
            iste molestias reprehenderit alias debitis. Aut, libero. Unde eum at
            nulla quam molestiae perspiciatis doloremque minus rem ducimus
            quisquam totam, esse quaerat deserunt odit. Assumenda maxime
            accusamus aliquam, deleniti perferendis asperiores dolorem dolor
            temporibus quidem beatae possimus tenetur labore similique
            voluptatem culpa non incidunt iste nostrum repellat voluptatibus
            vero dolore facilis? Ad, nulla laudantium. At voluptate eveniet
            officia sit vitae ad, quidem facere rem deserunt, excepturi
            praesentium! Vero, eum perspiciatis. Vitae corrupti, laborum aliquam
            at, ut corporis placeat odit eius quibusdam, illo voluptas itaque.
            Vel et amet magni autem eius tenetur iste soluta quidem ipsum animi
            qui laboriosam quo molestias quod voluptate obcaecati rerum aliquid
            repudiandae, officia dolores esse pariatur? Officia doloribus
            laboriosam dolores! Impedit deserunt tempora nihil, tenetur beatae
            error molestiae, vitae ratione repellat veniam pariatur fugit, porro
            necessitatibus laborum voluptas! Eveniet fuga, dolorem a quam
            recusandae quod aliquid est possimus nulla hic! At, ipsa? Distinctio
            fugiat molestiae fugit, esse nesciunt nulla, eligendi alias
            doloremque qui culpa earum est magnam quis modi optio praesentium
            laboriosam blanditiis rerum maiores iure porro odio inventore!
            Doloribus. Laboriosam, molestiae, a modi distinctio sapiente ipsa
            odio doloribus hic magni, accusantium fuga minima. Deleniti maiores
            odit quae repellat officiis harum nostrum aperiam sequi cumque?
            Accusamus, magni quia? Eum, iste? Assumenda deleniti aliquid
            quisquam fugit, blanditiis, aspernatur praesentium animi, voluptate
            error odit hic laudantium voluptatum voluptatibus quo tempora quia
            pariatur quidem magnam repellendus a? Quasi, dolorem. Doloribus odio
            nemo vel? Eos excepturi rerum fuga praesentium, doloremque
            voluptatum maxime necessitatibus. Nihil rem id alias consequuntur
            voluptates ipsam aspernatur dolor aperiam perferendis deserunt
            aliquam velit, maiores adipisci iure impedit fugiat saepe!
            Laboriosam! Autem voluptates consequatur fugiat nam eligendi, dolore
            inventore non velit, veritatis corrupti, nisi neque necessitatibus.
            Dolore praesentium non neque repellendus cupiditate temporibus sequi
            numquam corporis rerum modi, dolorum, alias maxime. Modi amet vel
            dolore provident, dolores et consequuntur, minima nesciunt omnis quo
            consectetur facilis necessitatibus, aperiam vitae esse iste cumque
            mollitia. Ab ratione aspernatur possimus sint odit deleniti ut
            saepe? Quae nesciunt autem beatae iste enim eveniet adipisci, iusto
            sit esse veniam est unde ipsum ipsa voluptates sint quam culpa
            quibusdam perferendis incidunt voluptatibus dolore? Blanditiis porro
            modi quas odio? Molestias at iure perferendis consequuntur quas,
            omnis, aut, veniam pariatur architecto nam vero dolore sapiente
            officia dicta distinctio dignissimos illo modi recusandae ducimus
            odit tempora labore voluptatibus quos illum. Maxime! Consequatur non
            distinctio accusantium culpa quos sed provident cupiditate inventore
            harum iure reprehenderit, doloribus voluptas ut ipsa corporis,
            officiis qui. Doloremque consequatur ad est cum animi aspernatur ea
            porro quidem? Doloribus, a. Voluptatum cupiditate quis accusamus ad
            magni alias suscipit reprehenderit maiores delectus optio at,
            adipisci vel repudiandae a doloremque dolor neque eos, fugiat ipsa
            illo odio quo. Nesciunt, fugit. Officiis repudiandae aliquam nam
            quos consequuntur enim odio eius, error laboriosam amet inventore
            voluptatibus deleniti vero, voluptate rerum voluptatum doloremque
            quas commodi, corrupti nesciunt? Aperiam fuga ut minus praesentium
            sapiente. Dolor hic aperiam possimus rem alias voluptatem sint. Vero
            quod animi reiciendis minus accusamus. Aliquid numquam distinctio
            animi mollitia similique, corporis corrupti cumque voluptatem facere
            expedita, alias totam tempora laudantium. Maxime, quia? Quisquam,
            laudantium! Cupiditate accusamus cumque ad incidunt dignissimos
            fugit vero libero totam omnis, consectetur quasi voluptate labore
            fugiat quia, tenetur nam? Laudantium amet voluptatum eos similique,
            quas blanditiis. Voluptatibus ratione impedit quaerat neque vel sed
            cumque consequuntur odio, corrupti accusantium sit aliquid, corporis
            ab temporibus quisquam laborum consequatur obcaecati mollitia modi
            ipsum possimus! Obcaecati incidunt iusto atque consectetur? Corporis
            dicta fugit minima quidem, esse eum officia itaque delectus? Dolores
            nam officia sint suscipit error modi temporibus nulla eos aliquid,
            ea amet laudantium vero, accusantium adipisci debitis, eligendi
            libero?
          </van-tab>
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
@Component
export default class AppAppraise extends Vue {
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
}
/deep/.van-tabs--card{
  height: 100%;
}
/deep/.van-tabs__content{
  height: 100%;
  overflow-y: scroll;
}
.van-tab__pane{
  overflow-y: scroll;
}
</style>
