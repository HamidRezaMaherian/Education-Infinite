using Edu_Infinite.Course.Core.Aggregates.Course.Validators;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.ValueObjects;
using FluentValidation;
using MediaInfoLib;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public abstract class CourseContent : BaseEntity<int>
	{
		private readonly CourseContentValidator _validator = new();
		public CourseContent(int sectionId, string title, Blob content)
		{
			SectionId = sectionId;
			Title = title;
			Content = content;
			//_validator.ValidateAndThrow(this);
		}
		public string Title { get; protected set; }
		public Blob Content { get; protected set; }
		public int SectionId { get; internal set; }
		public float Size { get; protected set; }
	}
	public class CourseDocumentContent : CourseContent
	{
		public CourseDocumentContent(int sectionId, string title, Blob content) : base(sectionId, title, content)
		{
		}
	}
	public class CourseVideoContent : CourseContent
	{
		public CourseVideoContent(int sectionId, string title, Blob content) : base(sectionId, title, content)
		{
			using var mediaInfo = new MediaInfo();
			mediaInfo.Open(content.ToString());
			var metadata=new MediaMetadata(mediaInfo);
			Size = metadata.FileSize;
		}
	}

}
