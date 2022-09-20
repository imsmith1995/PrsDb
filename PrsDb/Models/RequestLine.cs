using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace PrsDb.Models
{
    public class RequestLine
    {
        [Key]
        public int Id { get; set; }

        public int RequestId { get; set; }
        [JsonIgnore]
        public virtual Request? Request { get; set; }

        public int ProductId { get; set; }
        public virtual Product? Product { get; set; }

        public int Quantity { get; set; } = 1;

    }
}
