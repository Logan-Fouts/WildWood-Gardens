"use client"
import { Blog } from "@/app/blog/page";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

export function BlogCreater() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [preview, setPreview] = useState("");
    const [author, setAuthor] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    // Content sections state
    const [contentSections, setContentSections] = useState([
        { type: "paragraph", text: "" }
    ]);

    const addContentSection = (type) => {
        const newSection = {
            type,
            text: "",
            items: type === "list" ? [""] : undefined,
        };
        setContentSections([...contentSections, newSection]);
    };

    const updateSection = (index, field, value) => {
        const newSections = [...contentSections];
        if (field === "newListItem" && newSections[index].type === "list") {
            newSections[index].items = [...(newSections[index].items || []), ""];
        } else if (field === "listItem") {
            const [itemIndex, itemValue] = value;
            newSections[index].items[itemIndex] = itemValue;
        } else {
            newSections[index][field] = value;
        }
        setContentSections(newSections);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    image,
                    preview,
                    author,
                    content: contentSections
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("Post created successfully!");
                // Reset form
                setTitle("");
                setImage("");
                setPreview("");
                setAuthor("");
                setContentSections([{ type: "paragraph", text: "" }]);
            } else {
                setMessage(data.error || "Failed to create post");
            }
        } catch (error) {
            setMessage("Error creating post");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="p-4 bg-gray-50 min-h-screen">
            <SignedIn>
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Info */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>

                            <div>
                                <CldUploadWidget uploadPreset="blog image" onUpload={(result) => setImage(result.info.secure_url)}>
                                    {({ open }) => {
                                        return (
                                            <button type="button" onClick={() => open()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                                                Upload an Image
                                            </button>
                                        );
                                    }}
                                </CldUploadWidget>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Preview Text</label>
                                <textarea
                                    value={preview}
                                    onChange={(e) => setPreview(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    rows="2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Author</label>
                                <input
                                    type="text"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Content Sections</h3>

                            {contentSections.map((section, index) => (
                                <div key={index} className="border p-4 rounded">
                                    <div className="mb-2">
                                        <select
                                            value={section.type}
                                            onChange={(e) => updateSection(index, "type", e.target.value)}
                                            className="p-2 border rounded"
                                        >
                                            <option value="paragraph">Paragraph</option>
                                            <option value="subheading">Subheading</option>
                                            <option value="list">List</option>
                                        </select>
                                    </div>

                                    {section.type !== "list" ? (
                                        <textarea
                                            value={section.text}
                                            onChange={(e) => updateSection(index, "text", e.target.value)}
                                            className="w-full p-2 border rounded"
                                            rows="3"
                                        />
                                    ) : (
                                        <div className="space-y-2">
                                            {section.items?.map((item, itemIndex) => (
                                                <input
                                                    key={itemIndex}
                                                    type="text"
                                                    value={item}
                                                    onChange={(e) => updateSection(index, "listItem", [itemIndex, e.target.value])}
                                                    className="w-full p-2 border rounded"
                                                    placeholder={`List item ${itemIndex + 1}`}
                                                />
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => updateSection(index, "newListItem")}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                + Add List Item
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => addContentSection("paragraph")}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded"
                            >
                                + Add Content Section
                            </button>
                        </div>

                        {message && (
                            <div className={`p-3 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
                        >
                            {isSubmitting ? "Creating..." : "Create Post"}
                        </button>
                    </form>
                </div>
            </SignedIn>
            <SignedOut>
                Unauthorized
            </SignedOut>
        </main>
    );
}