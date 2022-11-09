<template>
  <div>
    <!-- {{ char.name }}
    {{ char.birth_year }}
    {{ char.gender }}
    {{ char.height }}
    {{ char.mass }} -->
    {{ char }}
  </div>
</template>

<script>
export default {
    props:['char'],
  data() {
    return {
      
      id: 2,
    };
  },
}










//   created() {
 
//     // this.id = this.$route.params.id
//   },

//   mounted() {
//     this.getChar();
//   },
//   methods: {
//     async getChar() {
//       await fetch(`https://swapi.dev/api/people/${this.id}`)
//         .then((response) => response.json())
//         //.then((data) => console.log(data))

//         .then((data) => (this.char = data));
//     },
    
//   },
// };
</script>

<style>
</style>