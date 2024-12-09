
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



import "./SearchPage.scss";
import Filter from "../../Components/Filter.jsx";
import Map from "../../Components/Map.jsx";
import { propertyData } from "../../../lib/propertyData.js";
import ListingCard from "../../Components/ListingCard.jsx";

export default function SearchPage() {

  const location = useLocation();
  const navigate = useNavigate();

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "buy";
  const city = queryParams.get("city") || "All Cities";
  const locality = queryParams.get("locality") || "";

  const data = propertyData;

  return (
    <>
      <div className="searchPageContainer">
      {/* <div className="roww "></div> */}
        <div className="container-fluid">
          
          <div className="row">
            <div className="col-12 col-md-8 pe-0">
              <div className="sticky-filter ">
                <Filter type={type} city={city} locality ={locality} />
              </div>
              <div className="listContainer h-100">
                {data.map((item) => (
                  <ListingCard key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mapContainer">
                <Map items={data} />
              </div>
            </div>
          </div>
          <div className="row mt-5 p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis, tenetur consectetur excepturi similique veritatis alias optio nisi dicta impedit ipsa! Unde nulla amet corrupti saepe non hic ipsam quisquam aliquid illum officiis harum dolores quae dolore eligendi maiores quaerat natus repellat nam mollitia ducimus, reprehenderit minus. Tenetur delectus magni exercitationem illum totam. Aliquam, placeat aliquid facilis odio quia necessitatibus quae, qui natus sit pariatur voluptates dolore omnis. Assumenda ea voluptatibus nostrum nesciunt ducimus, iure labore id harum officiis a et eveniet laudantium vel nulla reprehenderit ipsum delectus perferendis, ad odio? Molestias cum provident perspiciatis a saepe voluptate animi impedit omnis illum odit obcaecati iste expedita officia fugiat facilis doloribus facere deserunt, veniam optio excepturi repellat consequuntur veritatis dolores at. Magni minima esse saepe eligendi quos ipsa ex delectus nemo autem doloribus pariatur voluptatum cumque tenetur, architecto asperiores molestiae odit cupiditate? Sit veniam consectetur, fugiat ipsam dolorum amet dicta nobis distinctio eius dolore? Totam dolorem laudantium repellat culpa tempora, architecto unde enim mollitia animi ut nam odio ab deserunt natus excepturi cumque quaerat blanditiis voluptatem tenetur, pariatur doloremque praesentium id officia. Repudiandae omnis, sequi sapiente sed reprehenderit magnam suscipit ipsam unde cupiditate soluta, excepturi modi voluptatem esse quas quis iure totam ullam nostrum. Sunt ab harum id quae, doloremque quam eveniet reprehenderit, molestias, cumque at vitae sed quisquam repudiandae veniam neque optio libero est porro tempora iste error tempore velit! Earum maxime excepturi nemo ipsam libero laboriosam modi neque consequatur soluta perferendis sunt, tempore numquam magni recusandae et obcaecati culpa inventore reiciendis officiis blanditiis. Repudiandae praesentium, eligendi, earum unde temporibus commodi repellat voluptate harum maiores deleniti voluptates eveniet sed ipsam ad vitae! Quis cupiditate esse sequi architecto illo consequuntur id similique, vero et corrupti earum quaerat consectetur dolore reprehenderit sit suscipit laborum neque iste maiores libero eum. Sapiente cum neque, quis odio suscipit qui, deleniti voluptate accusantium quisquam fugit laboriosam similique iste a dignissimos, iure dolorem minus. Omnis commodi illo, cumque dicta excepturi delectus deleniti earum cupiditate, dolore eligendi blanditiis vitae doloribus! Reiciendis molestias quia esse, repellat cupiditate neque odio! Doloribus illum dignissimos modi necessitatibus itaque, minima culpa qui facilis dolorum nesciunt corporis molestiae accusamus, omnis quia tempore perferendis debitis dolore suscipit enim autem? Accusamus vero eos sint minus harum autem esse voluptates illo, corrupti officia repudiandae, perspiciatis itaque numquam incidunt magni, qui alias. Et fuga adipisci fugit cum voluptas! Qui numquam perferendis deserunt, eaque minus, animi laudantium id cum nulla soluta asperiores magni ab porro accusantium quae quaerat amet distinctio culpa debitis quod, dignissimos inventore magnam quia ex. Quos molestias soluta nihil ducimus quo commodi officiis veniam atque? Animi maxime quia et, cupiditate dolor iusto debitis numquam fuga odit quos quis quasi fugiat aut incidunt eum nostrum magni expedita, ea aperiam possimus at voluptate accusantium quas? Labore nulla quos ab impedit eligendi, architecto nisi ullam beatae animi eius ea, quod reiciendis, recusandae enim incidunt rerum ipsum illo. Maxime, ullam aspernatur. Id eos quod alias ratione impedit laboriosam officia hic autem, quaerat, nemo tempore sint debitis unde corrupti repudiandae necessitatibus nihil voluptas accusamus illo molestiae molestias. Qui officiis modi adipisci quod molestiae. Aspernatur atque natus expedita voluptates cumque nam voluptate, illum cum consectetur culpa alias. Laudantium magnam nobis assumenda architecto facilis? Mollitia numquam adipisci dolorem architecto similique perferendis provident illo ex eligendi, debitis ipsam ipsa! Expedita architecto voluptates non cupiditate fugit sunt minus quis possimus facilis? Eligendi repellat aperiam esse voluptas incidunt quis error ducimus nam maxime animi, laborum dignissimos iure ut quia velit officia eius, quos maiores natus illum facere excepturi nisi! Aperiam molestiae blanditiis voluptates magni? At iusto dolore deleniti nesciunt, repudiandae quidem architecto est. Dolorum voluptatibus ducimus illum sint non, odit, in nobis consectetur quia, rerum molestias magni provident numquam quisquam quasi. Mollitia adipisci error vero minus quibusdam iste saepe, id laborum laudantium atque, odio suscipit illum corporis dolores dolorem pariatur vitae veniam! Enim dignissimos perferendis iure! Voluptatibus voluptate rem culpa? At doloribus laboriosam aut odio assumenda ipsam alias molestiae tempora molestias sint iure culpa ducimus reiciendis est, quo facilis tenetur! Consectetur quam, maxime, voluptate laudantium nisi reiciendis nam iusto aut veniam saepe reprehenderit, excepturi vero ex! Consequatur officia tempore laudantium iusto exercitationem earum voluptate natus ex nulla ipsum odit quidem nisi at, placeat nam vitae quis inventore! Ipsa harum incidunt voluptates ratione officiis ab eos eius at minus repellendus quisquam odio expedita odit enim corrupti sint, molestias, maxime dolor hic qui nulla maiores. Cupiditate consectetur incidunt veniam dolorum tempore impedit vero ex, earum eveniet praesentium velit obcaecati eos beatae soluta adipisci rerum ut et, deleniti veritatis. Illum, soluta ipsum non exercitationem quisquam itaque architecto, fugit laboriosam perferendis dolores pariatur alias nihil, fugiat quod. Accusamus possimus veritatis odit quam eum, nobis error eos, doloribus dolore nisi repellendus illo nam illum ducimus cupiditate numquam aut totam obcaecati fugit quas! Reprehenderit doloremque repellat odit exercitationem enim totam, repudiandae voluptas rerum nostrum beatae accusantium! Quibusdam eius veritatis eaque fuga, veniam labore similique recusandae velit ab placeat. Beatae aliquam, quam, ipsam ea aliquid doloremque magni possimus quos temporibus, commodi aspernatur quaerat maxime numquam non ex obcaecati hic soluta accusamus est amet quo tenetur laudantium. Consequuntur suscipit aspernatur iusto in, architecto ratione quam voluptatum enim at nam sed maxime voluptatem, repellat fugiat quas quisquam deserunt voluptate doloribus neque saepe soluta illum necessitatibus? Quo quae id natus, commodi recusandae fugit aut eum mollitia quibusdam beatae distinctio quis, porro quos? Porro corporis, ratione illo, in ab ipsa nostrum quo nulla veniam exercitationem fugit deleniti tempora labore, molestias doloremque accusantium repudiandae numquam odio. Expedita amet optio beatae quos. Totam enim fugiat omnis et ex, nostrum dolore. Magnam enim ipsa pariatur unde placeat rem molestias odio quo repellat. Possimus quia ducimus rerum ab enim omnis repudiandae repellendus, necessitatibus sint praesentium maxime exercitationem consectetur est natus! Expedita repellat neque quibusdam doloremque ipsa. Hic asperiores, nam placeat aspernatur qui ab saepe iusto molestias, ipsam dolor nisi quod nobis tempore! At omnis quasi nihil, corporis rem, adipisci est nam nostrum accusamus asperiores id ducimus veritatis? Aliquid ipsum dolorum vero incidunt voluptas laboriosam illum? Sapiente laudantium alias assumenda architecto nostrum.</p>
          </div>
        </div>
      </div>
    </>
  );
}
