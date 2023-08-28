<script lang="ts">
	import type mainInterface from "../interface/mainInterface";

  export let data: mainInterface
</script>

<!-- Card Class -->
<div class="card w-[20rem] p-4 rounded-[10px] bg-whitesmoke text-pastel-black text-center hover:cursor-pointer hover:opacity-80 duration-300" data-modal-target={data.img.split('/file/')[1].split('+00:00')[1].replace('.webp', '')} data-modal-toggle={data.img.split('/file/')[1].split('+00:00')[1].replace('.webp', '')}>
  <div class="w-full h-[18rem] rounded-[10px] border-[1px] border-solid border-pastel-black !bg-center !bg-no-repeat !bg-cover" style={`background: url(${data.img})`}></div>
  <div>
    <p class="text-2xl p-4 !pb-2">
      {data.title}
    </p>
    <p class="p-4 !pt-2 text-[#515454] text-right">
      {data.date}
    </p>
  </div>
</div>