<template>
  <div>
    <h1>Form Responses</h1>
    <button @click="fetchResponses">Fetch Responses</button>
    <pre>{{ responses }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      responses: [],
    };
  },
  methods: {
    async fetchResponses() {
      const formId = 'cLZojxk94ous';
      const apiKey = 'sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912';
      const filters = [
        {
          id: 'nameId',
          condition: 'equals',
          value: 'Timmy',
        },
      ];

      try {
        const applyFilters = filters || [];
        const response = await this.fetchFilteredResponses(formId, apiKey, applyFilters);

        this.responses = response;
      } catch (error) {
        console.error('Error fetching filtered responses:', error);
      }
    },
    async fetchFilteredResponses(formId, apiKey, filters) {
      const url = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.get(url, { headers });
      console.log(response.data);

      return response.data;
    },
  },
};
</script>

<style scoped>
</style>
